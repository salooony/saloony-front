import { MainLayoutType } from '@src/config';

export interface SearchButtonProps {
  onClick: () => void;
  disabled: boolean;
  size?: number;
  variant?: MainLayoutType;
}
