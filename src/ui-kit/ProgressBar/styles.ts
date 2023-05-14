import styled from 'styled-components';
import {Media} from '../theme/breakpoints';
import {Text} from '../Typography/Text';
import {Status} from './types';

export const BarContainer = styled.div`
  display: flex;
  align-items: center;
  ${Media.up.m} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Circle = styled.div<{$status: Status}>`
  width: 8px;
  height: 8px;
  background-color: ${({theme, $status}) =>
    $status === Status.READY || $status === Status.PENDING ? theme.palette.common.white : theme.palette.common.blue};
  opacity: ${({$status}) => $status === Status.PENDING && '0.3'};
  border-radius: 50%;
`;

export const Line = styled.div<{$status: Status}>`
  margin: 0 4px;
  width: 40px;
  height: 1px;
  background-color: ${({theme, $status}) =>
    $status === Status.PENDING ? theme.palette.common.white : theme.palette.common.blue};
  opacity: ${({$status}) => $status === Status.PENDING && '0.3'};
  ${Media.up.m} {
    width: 1px;
    height: 25px;
  }
`;

export const BarRowWrapper = styled.div`
  ${Media.up.m} {
    display: flex;
    align-items: center;
  }
`;

export const BarText = styled(Text)<{$status: Status}>`
  display: none;
  ${Media.up.m} {
    display: block;
    margin-left: 8px;
    opacity: ${({$status}) => $status === Status.PENDING && '0.3'};
  }
`;
