import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { APP_DEFAULT_PATH } from 'config';
import AuthRegister from '@/sections/auth/auth-forms/AuthRegister';

jest.mock('next-auth/react');
jest.mock('next/navigation');

type SignInResponse = {
  ok: boolean;
  error: string | null;
  status: number;
  url: string | null;
};

const mockedSignIn = signIn as unknown as jest.Mock<Promise<SignInResponse>, [string, Record<string, unknown>]>;
const mockedUseSession = useSession as unknown as jest.Mock;
const mockedUseRouter = useRouter as unknown as jest.Mock;

const pushMock = jest.fn();

const createSignInResult = (overrides: Partial<SignInResponse> = {}): SignInResponse => ({
  ok: true,
  error: null,
  status: 200,
  url: null,
  ...overrides,
});

const createDeferred = <T,>() => {
  let resolve!: (value: T) => void;
  let reject!: (reason?: unknown) => void;

  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
};

const createRouter = () => ({
  push: pushMock,
  replace: jest.fn(),
  refresh: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
});

type Provider = {
  id: string;
  name: string;
};

const createTestTheme = () => {
  const theme = createTheme();

  theme.customShadows = {
    button: 'none',
    text: 'none',
    z1: 'none',
    primary: 'none',
    primaryButton: 'none',
    secondary: 'none',
    secondaryButton: 'none',
    error: 'none',
    errorButton: 'none',
    warning: 'none',
    warningButton: 'none',
    info: 'none',
    infoButton: 'none',
    success: 'none',
    successButton: 'none',
    grey: 'none',
    greyButton: 'none',
  };

  return theme;
};

const testTheme = createTestTheme();

const getInputByLabel = (label: string | RegExp): HTMLInputElement =>
  screen.getByLabelText(label, { selector: 'input' }) as HTMLInputElement;

const renderRegistrationForm = (providers: Record<string, Provider> = {}) =>
  render(
    <ThemeProvider theme={testTheme}>
      <AuthRegister providers={providers} csrfToken="csrf-token" />
    </ThemeProvider>
  );

const fillValidRegistrationForm = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(getInputByLabel(/first name/i), 'John');
  await user.type(getInputByLabel(/last name/i), 'Doe');
  await user.type(getInputByLabel(/email/i), 'john@example.com');
  await user.type(getInputByLabel(/phone number/i), '+14155552671');
  await user.type(getInputByLabel(/password/i), 'StrongPassword1');
  await user.type(getInputByLabel(/date of birth/i), '01/01/2000');
};

beforeEach(() => {
  jest.clearAllMocks();

  mockedUseRouter.mockReturnValue(createRouter());
  mockedUseSession.mockReturnValue({
    data: null,
    status: 'unauthenticated',
    update: jest.fn(),
  });
  mockedSignIn.mockResolvedValue(createSignInResult());
});

describe('AuthRegister (Registration) - Unit Tests', () => {
  describe('Rendering', () => {
    it('renders required fields, action button, and static texts', () => {
      renderRegistrationForm();

      expect(getInputByLabel(/first name/i)).toBeInTheDocument();
      expect(getInputByLabel(/last name/i)).toBeInTheDocument();
      expect(getInputByLabel(/email/i)).toBeInTheDocument();
      expect(getInputByLabel(/phone number/i)).toBeInTheDocument();
      expect(getInputByLabel(/password/i)).toBeInTheDocument();
      expect(getInputByLabel(/date of birth/i)).toBeInTheDocument();

      expect(screen.getByRole('button', { name: /get otp/i })).toBeInTheDocument();
      expect(screen.getByText('Already have an account?')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /log in/i })).toBeInTheDocument();
    });

    it('toggles password visibility when clicking the visibility button', async () => {
      const user = userEvent.setup();
      renderRegistrationForm();

      const passwordInput = getInputByLabel(/^password$/i);
      const togglePasswordButton = screen.getByRole('button', { name: /toggle password visibility/i });

      expect(passwordInput).toHaveAttribute('type', 'password');

      await user.click(togglePasswordButton);
      expect(passwordInput).toHaveAttribute('type', 'text');

      await user.click(togglePasswordButton);
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('starts oauth flow when clicking on a social provider button', async () => {
      const user = userEvent.setup();
      renderRegistrationForm({
        google: { id: 'google', name: 'Google' },
      });

      await user.click(screen.getByRole('button', { name: /google/i }));

      expect(mockedSignIn).toHaveBeenCalledWith('google', { callbackUrl: APP_DEFAULT_PATH });
    });
  });

  describe('Validation', () => {
    it('shows required field errors when submitting empty form', async () => {
      const user = userEvent.setup();
      renderRegistrationForm();

      await user.click(screen.getByRole('button', { name: /get otp/i }));

      expect(await screen.findByText('First Name is required')).toBeInTheDocument();
      expect(screen.getByText('Last Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Phone number is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
      expect(screen.getByText('Date of birth is required')).toBeInTheDocument();
      expect(mockedSignIn).not.toHaveBeenCalled();
    });

    it('shows invalid email error and clears it after correcting the input', async () => {
      const user = userEvent.setup();
      renderRegistrationForm();

      await fillValidRegistrationForm(user);
      await user.clear(getInputByLabel(/email/i));
      await user.type(getInputByLabel(/email/i), 'invalid-email');
      await user.click(screen.getByRole('button', { name: /get otp/i }));

      expect(await screen.findByText('Must be a valid email')).toBeInTheDocument();
      expect(mockedSignIn).not.toHaveBeenCalled();

      await user.clear(getInputByLabel(/email/i));
      await user.type(getInputByLabel(/email/i), 'john@example.com');

      await waitFor(() => {
        expect(screen.queryByText('Must be a valid email')).not.toBeInTheDocument();
      });
    });

    it('shows weak password error and clears it after entering a strong password', async () => {
      const user = userEvent.setup();
      renderRegistrationForm();

      await user.type(getInputByLabel(/first name/i), 'John');
      await user.type(getInputByLabel(/last name/i), 'Doe');
      await user.type(getInputByLabel(/email/i), 'john@example.com');
      await user.type(getInputByLabel(/phone number/i), '+14155552671');
      await user.type(getInputByLabel(/password/i), 'short123');
      await user.type(getInputByLabel(/date of birth/i), '01/01/2000');
      await user.click(screen.getByRole('button', { name: /get otp/i }));

      expect(await screen.findByText('Password must be at least 10 characters')).toBeInTheDocument();
      expect(mockedSignIn).not.toHaveBeenCalled();

      await user.clear(getInputByLabel(/password/i));
      await user.type(getInputByLabel(/password/i), 'StrongPassword1');

      await waitFor(() => {
        expect(screen.queryByText('Password must be at least 10 characters')).not.toBeInTheDocument();
      });
    });
  });

  describe('Submit', () => {
    it('submits valid data through next-auth and redirects on success', async () => {
      const user = userEvent.setup();
      renderRegistrationForm();

      await user.type(getInputByLabel(/first name/i), '  John  ');
      await user.type(getInputByLabel(/last name/i), '  Doe  ');
      await user.type(getInputByLabel(/email/i), '  john@example.com  ');
      await user.type(getInputByLabel(/phone number/i), '  +14155552671  ');
      await user.type(getInputByLabel(/password/i), 'StrongPassword1');
      await user.type(getInputByLabel(/date of birth/i), '01/01/2000');
      await user.click(screen.getByRole('button', { name: /get otp/i }));

      await waitFor(() => {
        expect(mockedSignIn).toHaveBeenCalledWith('register', {
          redirect: false,
          firstname: 'John',
          lastname: 'Doe',
          email: 'john@example.com',
          mobileNumber: '+14155552671',
          birthdate: '01/01/2000',
          password: 'StrongPassword1',
          role: 'Client',
          language: 'French',
        });
      });
      expect(pushMock).toHaveBeenCalledWith(APP_DEFAULT_PATH);
    });

    it('disables submit button while request is in progress and re-enables it after completion', async () => {
      const user = userEvent.setup();
      const deferred = createDeferred<SignInResponse>();

      mockedSignIn.mockReturnValueOnce(deferred.promise);
      renderRegistrationForm();
      await fillValidRegistrationForm(user);

      const submitButton = screen.getByRole('button', { name: /get otp/i });

      await user.click(submitButton);

      await waitFor(() => {
        expect(submitButton).toBeDisabled();
      });

      deferred.resolve(createSignInResult());

      await waitFor(() => {
        expect(submitButton).not.toBeDisabled();
      });
    });

    it('shows clear backend error message when registration request fails', async () => {
      const user = userEvent.setup();
      mockedSignIn.mockResolvedValueOnce(
        createSignInResult({
          ok: false,
          status: 409,
          error: 'Email already exists',
        })
      );
      renderRegistrationForm();
      await fillValidRegistrationForm(user);

      await user.click(screen.getByRole('button', { name: /get otp/i }));

      expect(await screen.findByText('Email already exists')).toBeInTheDocument();
      expect(pushMock).not.toHaveBeenCalled();
    });

    it('shows thrown error message when signIn rejects (server error case)', async () => {
      const user = userEvent.setup();
      mockedSignIn.mockRejectedValueOnce(new Error('Internal server error'));
      renderRegistrationForm();
      await fillValidRegistrationForm(user);

      await user.click(screen.getByRole('button', { name: /get otp/i }));

      expect(await screen.findByText('Internal server error')).toBeInTheDocument();
      expect(pushMock).not.toHaveBeenCalled();
    });
  });
});
