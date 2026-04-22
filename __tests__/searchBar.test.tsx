import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

import SearchBar from '@/components/inputs/search-bar';

jest.mock('next/navigation');

const mockedUseRouter = useRouter as unknown as jest.Mock;
const pushMock = jest.fn();

const createRouter = () => ({
  push: pushMock,
  replace: jest.fn(),
  refresh: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn()
});

const testTheme = createTheme();

const renderSearchBar = () =>
  render(
    <ThemeProvider theme={testTheme}>
      <SearchBar />
    </ThemeProvider>
  );

describe('SearchBar - Unit Tests (validation + routing)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedUseRouter.mockReturnValue(createRouter());
  });

  it('renders query input, location input, and search button', () => {
    renderSearchBar();

    expect(screen.getByPlaceholderText(/name of the salon, services/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/address, city/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^search$/i })).toBeInTheDocument();
  });

  it('keeps search disabled when query is empty and does not navigate', () => {
    renderSearchBar();

    const searchButton = screen.getByRole('button', { name: /^search$/i });
    expect(searchButton).toBeDisabled();
    fireEvent.click(searchButton);

    expect(pushMock).not.toHaveBeenCalled();
  });

  it('disables search for invalid location and does not navigate', async () => {
    const user = userEvent.setup();
    renderSearchBar();

    const queryInput = screen.getByPlaceholderText(/name of the salon, services/i);
    const locationInput = screen.getByPlaceholderText(/address, city/i);
    const searchButton = screen.getByRole('button', { name: /^search$/i });

    await user.type(queryInput, 'Hairdressers');
    expect(searchButton).not.toBeDisabled();

    await user.type(locationInput, 'Nowhere');
    expect(searchButton).toBeDisabled();
    fireEvent.click(searchButton);

    expect(pushMock).not.toHaveBeenCalled();
  });

  it('navigates to the expected search route for valid query and location', async () => {
    const user = userEvent.setup();
    renderSearchBar();

    const queryInput = screen.getByPlaceholderText(/name of the salon, services/i);
    const locationInput = screen.getByPlaceholderText(/address, city/i);
    const searchButton = screen.getByRole('button', { name: /^search$/i });

    await user.type(queryInput, 'Hairdressers');
    await user.type(locationInput, 'Paris');

    expect(searchButton).not.toBeDisabled();

    await user.click(searchButton);

    expect(pushMock).toHaveBeenCalledTimes(1);
    expect(pushMock).toHaveBeenCalledWith('/search?query=Hairdressers&location=Paris');
  });
});
