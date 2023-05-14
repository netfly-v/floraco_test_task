export enum ButtonVariant {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export type ButtonProps = {
  variant?: ButtonVariant;
  onClick?: React.MouseEventHandler;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export type RadioButtonProps = {
  isBadge?: boolean;
  label: string | React.ReactNode;
  checked: boolean;
  onChange: () => void;
  name: string;
  value: string;
};
