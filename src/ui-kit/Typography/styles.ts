import {TextBaseProps} from './types';
import styled, {css} from 'styled-components';
import {defaultTheme as theme} from '../theme/theme';

const color = ({color}: TextBaseProps) => {
  return color ? theme.palette.text[color] : theme.palette.text.white;
};

export const fontSize = ({size}: Partial<TextBaseProps>) => {
  return size + 'px';
};

export const lineHeight = ({height}: Partial<TextBaseProps>) => {
  return height + 'px';
};

const fontWeight = ({weight}: TextBaseProps) => {
  if (weight) {
    switch (weight) {
      case 'medium':
        return 500;
      case 'regular':
        return 400;
      default:
        return 400;
    }
  }
};

const fontCase = ({case: _case}: TextBaseProps) => {
  return _case ? {textTransform: _case} : {};
};

const textDecoration = ({decoration}: TextBaseProps) => {
  return decoration ? decoration : 'none';
};

const styles = css`
  font-family: Space Grotesk;
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  text-decoration: ${textDecoration};
  line-height: ${lineHeight};
  ${fontCase};
`;

export const StyledText = styled.span<TextBaseProps>`
  ${styles};
  color: ${color};
`;
