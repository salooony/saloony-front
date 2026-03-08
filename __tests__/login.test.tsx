import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { signIn, useSession } from 'next-auth/react';
import { preload } from 'swr';

import { APP_DEFAULT_PATH } from 'config';
import AuthLogin from '@/sections/auth/auth-forms/AuthLogin';

jest.mock('next-auth/react');
jest.mock('swr');

type SignInResponse = {
  ok: boolean;
  error: string | null;
  status: number;
  url: string | null;
};

const mockedSignIn = signIn as unknown as jest.Mock<Promise<SignInResponse>, [string, Record<string, unknown>]>;
const mockedUseSession = useSession as unknown as jest.Mock;
const mockedPreload = preload as unknown as jest.Mock;

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

const getEmailInput = (): HTMLInputElement => screen.getByLabelText(/email/i, { selector: 'input' }) as HTMLInputElement;
const getPasswordInput = (): HTMLInputElement => screen.getByPlaceholderText(/enter password/i) as HTMLInputElement;

const renderLoginForm = () =>
  render(
    <ThemeProvider theme={testTheme}>
      <AuthLogin providers={null} csrfToken="csrf-token" />
    </ThemeProvider>
  );

const fillValidLoginForm = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.clear(getEmailInput());
  await user.type(getEmailInput(), 'john@example.com');
  await user.clear(getPasswordInput());
  await user.type(getPasswordInput(), 'Pass12345');
};

beforeEach(() => {
  jest.clearAllMocks();
  mockedPreload.mockResolvedValue(undefined);

  mockedUseSession.mockReturnValue({
    data: null,
    status: 'unauthenticated',
    update: jest.fn(),
  });

  mockedSignIn.mockResolvedValue(createSignInResult());
});

describe('AuthLogin - Unit Tests', () => {
  describe('Rendering', () => {
    it('renders required fields, action button, and static texts', () => {
      renderLoginForm();

      expect(getEmailInput()).toBeInTheDocument();
      expect(getPasswordInput()).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /forgot password\?/i })).toHaveAttribute('href', '/forget-pass');
    });

    it('starts with default form values', () => {
      renderLoginForm();

      expect(getEmailInput()).toHaveValue('info@codedthemes.com');
      expect(getPasswordInput()).toHaveValue('123456');
    });

    it('toggles password visibility when clicking the visibility button', async () => {
      const user = userEvent.setup();
      renderLoginForm();

      const passwordInput = getPasswordInput();
      const togglePasswordButton = screen.getByRole('button', { name: /toggle password visibility/i });

      expect(passwordInput).toHaveAttribute('type', 'password');

      await user.click(togglePasswordButton);
      expect(passwordInput).toHaveAttribute('type', 'text');

      await user.click(togglePasswordButton);
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('uses disabled forgot-password link when user has a session', () => {
      mockedUseSession.mockReturnValueOnce({
        data: { user: { name: 'Jane' } },
        status: 'authenticated',
        update: jest.fn(),
      });

      renderLoginForm();

      expect(screen.getByRole('link', { name: /forgot password\?/i })).toHaveAttribute('href', '#!');
    });
  });

  describe('Validation', () => {
    it('shows required field errors when submitting empty form', async () => {
      const user = userEvent.setup();
      renderLoginForm();

      await user.clear(getEmailInput());
      await user.clear(getPasswordInput());
      await user.click(screen.getByRole('button', { name: /log in/i }));

      expect(await screen.findByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
      expect(mockedSignIn).not.toHaveBeenCalled();
    });

    it('shows invalid email error and clears it after correcting the input', async () => {
      const user = userEvent.setup();
      renderLoginForm();

      await fillValidLoginForm(user);
      await user.clear(getEmailInput());
      await user.type(getEmailInput(), 'invalid-email');
      await user.click(screen.getByRole('button', { name: /log in/i }));

      expect(await screen.findByText('Must be a valid email')).toBeInTheDocument();
      expect(mockedSignIn).not.toHaveBeenCalled();

      await user.clear(getEmailInput());
      await user.type(getEmailInput(), 'john@example.com');

      await waitFor(() => {
        expect(screen.queryByText('Must be a valid email')).not.toBeInTheDocument();
      });
    });

    it('shows max-length password error and clears it after entering a valid password', async () => {
      const user = userEvent.setup();
      renderLoginForm();

      await user.clear(getEmailInput());
      await user.type(getEmailInput(), 'john@example.com');
      await user.clear(getPasswordInput());
      await user.type(getPasswordInput(), 'VeryLongPass123');
      await user.click(screen.getByRole('button', { name: /log in/i }));

      expect(await screen.findByText('Password must be less than 10 characters')).toBeInTheDocument();
      expect(mockedSignIn).not.toHaveBeenCalled();

      await user.clear(getPasswordInput());
      await user.type(getPasswordInput(), 'Pass12345');

      await waitFor(() => {
        expect(screen.queryByText('Password must be less than 10 characters')).not.toBeInTheDocument();
      });
    });
  });

  describe('Submit', () => {
    it('submits valid data through next-auth and preloads dashboard menu on success', async () => {
      const user = userEvent.setup();
      renderLoginForm();

      await fillValidLoginForm(user);
      await user.click(screen.getByRole('button', { name: /log in/i }));

      await waitFor(() => {
        expect(mockedSignIn).toHaveBeenCalledWith('login', {
          redirect: false,
          email: 'john@example.com',
          password: 'Pass12345',
          callbackUrl: APP_DEFAULT_PATH,
        });
      });

      expect(mockedPreload).toHaveBeenCalledWith('api/menu/dashboard', expect.any(Function));
    });

    it('disables submit button while request is in progress and re-enables it after completion', async () => {
      const user = userEvent.setup();
      const deferred = createDeferred<SignInResponse>();

      mockedSignIn.mockReturnValueOnce(deferred.promise);
      renderLoginForm();
      await fillValidLoginForm(user);

      const submitButton = screen.getByRole('button', { name: /log in/i });

      await user.click(submitButton);

      await waitFor(() => {
        expect(submitButton).toBeDisabled();
      });

      deferred.resolve(createSignInResult());

      await waitFor(() => {
        expect(submitButton).not.toBeDisabled();
      });
    });

    it('shows clear backend error message when login request fails', async () => {
      const user = userEvent.setup();

      mockedSignIn.mockResolvedValueOnce(
        createSignInResult({
          ok: false,
          status: 401,
          error: 'Invalid credentials',
        })
      );

      renderLoginForm();
      await fillValidLoginForm(user);

      await user.click(screen.getByRole('button', { name: /log in/i }));

      expect(await screen.findByText('Invalid credentials')).toBeInTheDocument();
      expect(mockedPreload).not.toHaveBeenCalled();
    });

    it('shows rejected error message when signIn promise rejects', async () => {
      const user = userEvent.setup();

      mockedSignIn.mockRejectedValueOnce({ error: 'Internal server error' });
      renderLoginForm();
      await fillValidLoginForm(user);

      await user.click(screen.getByRole('button', { name: /log in/i }));

      expect(await screen.findByText('Internal server error')).toBeInTheDocument();
      expect(mockedPreload).not.toHaveBeenCalled();
    });
  });
});
