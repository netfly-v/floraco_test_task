import React, {PropsWithChildren} from 'react';
import {CustomRadioInput, RadioButtonLabel, RadioInput, StyledButton} from './styles';
import {ButtonProps, ButtonVariant, RadioButtonProps} from './types';

export const Button: React.FC<ButtonProps & PropsWithChildren> = ({
  variant = ButtonVariant.PRIMARY,
  children,
  ...props
}) => {
  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export const RadioButton: React.FC<RadioButtonProps> = ({isBadge, label, checked, onChange, ...props}) => {
  return (
    <RadioButtonLabel $isBadge={isBadge}>
      <RadioInput type="radio" checked={checked} onChange={onChange} {...props} />
      <CustomRadioInput $isBadge={isBadge} />
      {label}
    </RadioButtonLabel>
  );
};
