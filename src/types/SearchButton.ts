export interface SearchButtonProps {
  onClick: () => void;
  disabled: boolean;
  size?: number;
  variant?: 'home' | 'search' | 'without-location';
}
