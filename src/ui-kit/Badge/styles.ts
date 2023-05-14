import {rgba} from 'polished';
import styled from 'styled-components';

export const BadgeWrapper = styled.div<{$isActive: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 6px 12px;
  margin-top: 12px;
  gap: 4px;
  border-radius: 16px;
  background-color: ${({theme, $isActive}) =>
    $isActive ? rgba(theme.palette.background.darkBlue, 0.1) : rgba(theme.palette.background.gray, 0.1)};
`;
