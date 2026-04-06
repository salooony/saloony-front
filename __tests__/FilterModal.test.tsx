import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterModal from '../src/components/filter-button/FilterModal';
import { AvailabilityOption, SortOption } from '../src/types/filter';

// Mock hooks
jest.mock('react-intl', () => ({
  useIntl: () => ({
    formatMessage: ({ id, defaultMessage }: { id: string; defaultMessage?: string }) => id
  })
}));

jest.mock('hooks/useConfig', () => ({
  __esModule: true,
  default: () => ({ themeDirection: 'ltr' })
}));

describe('FilterModal Component', () => {
  const defaultDraft = {
    availability: AvailabilityOption.ANY,
    sortBy: SortOption.NONE,
    pickedDate: null
  };

  const mockProps = {
    open: true,
    draft: defaultDraft,
    onClose: jest.fn(),
    onAvailabilityChange: jest.fn(),
    onSortChange: jest.fn(),
    onDateChange: jest.fn(),
    onReset: jest.fn(),
    onSave: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders modal with correct default elements', () => {
    render(<FilterModal {...mockProps} />);
    expect(screen.getByText('filter.title')).toBeInTheDocument();
    expect(screen.getByText('filter.save')).toBeInTheDocument();
  });

  it('calls onReset when reset button is clicked', () => {
    render(<FilterModal {...mockProps} />);

    const resetBtn = screen.getByText('filter.reset');
    fireEvent.click(resetBtn);

    expect(mockProps.onReset).toHaveBeenCalledTimes(1);
  });

  it('calls onSave when save button is clicked and form is valid', () => {
    render(<FilterModal {...mockProps} />);

    const saveBtn = screen.getByText('filter.save');
    fireEvent.click(saveBtn);

    expect(mockProps.onSave).toHaveBeenCalledTimes(1);
  });

  it('prevents saving and displays error if "Pick a Date" is selected but no date is provided', () => {
    const draftWithPickOption = {
      ...defaultDraft,
      availability: AvailabilityOption.PICK,
      pickedDate: null
    };

    render(<FilterModal {...mockProps} draft={draftWithPickOption} />);

    const saveBtn = screen.getByText('filter.save');
    fireEvent.click(saveBtn);

    // Error message should appear
    expect(screen.getByText('filter.error.pickDate')).toBeInTheDocument();

    // onSave should be blocked
    expect(mockProps.onSave).not.toHaveBeenCalled();
  });

  it('calls handleClose when close icon is clicked', () => {
    render(<FilterModal {...mockProps} />);

    // Find the close button by aria-label or id
    const closeBtn = screen.getByLabelText('close filter modal');
    fireEvent.click(closeBtn);

    expect(mockProps.onClose).toHaveBeenCalledTimes(1);
  });
});
