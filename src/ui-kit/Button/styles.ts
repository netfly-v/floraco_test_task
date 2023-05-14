import {rgba} from 'polished';
import styled from 'styled-components';
import {Media} from '../theme/breakpoints';
import {ButtonVariant} from './types';

export const StyledButton = styled.button<{$variant: ButtonVariant}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  padding: 13px 24px;
  gap: 10px;
  border-radius: 10px;
  width: 100%;
  background-color: ${({theme, $variant}) =>
    $variant === ButtonVariant.PRIMARY ? theme.palette.common.blue : rgba(theme.palette.background.gray, 0.1)};
  ${Media.up.m} {
    width: ${({$variant}) => ($variant === ButtonVariant.PRIMARY ? '328px' : '120px')};
  }
`;

export const RadioButtonLabel = styled.label<{$isBadge?: boolean}>`
  margin-top: ${({$isBadge}) => !$isBadge && '26px'};
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
  visibility: hidden;
  :checked + span:after {
    opacity: 1;
  }
`;

export const CustomRadioInput = styled.span<{$isBadge?: boolean}>`
  left: -8px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-color: ${({theme}) => theme.palette.background.black};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: ${({$isBadge}) => ($isBadge ? 'none' : 'inline-block')};
  position: relative;
  ::after {
    content: '';
    width: 12px;
    height: 12px;
    position: absolute;
    background-color: ${({theme}) => theme.palette.common.blue};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s;
  }
`;
