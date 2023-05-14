import React from 'react';
import {BarContainer, BarRowWrapper, BarText, Circle, Line} from './styles';
import {ProgressBarProps, Status} from './types';

export const ProgressBar: React.FC<ProgressBarProps> = ({step}) => {
  return (
    <BarContainer>
      <BarRowWrapper>
        <Circle $status={step === 0 ? Status.READY : Status.FILLED} />
        <BarText
          size={14}
          height={20}
          $status={step === 0 ? Status.READY : Status.FILLED}
          color={step === 0 ? 'white' : 'blue'}>
          Start First Project
        </BarText>
      </BarRowWrapper>

      <Line $status={step === 0 ? Status.PENDING : Status.FILLED} />
      <BarRowWrapper>
        <Circle $status={step === 0 ? Status.PENDING : step === 1 ? Status.READY : Status.FILLED} />
        <BarText
          size={14}
          height={20}
          $status={step === 0 ? Status.PENDING : step === 1 ? Status.READY : Status.FILLED}
          color={step === 0 ? 'white' : step === 1 ? 'white' : 'blue'}>
          Project Details
        </BarText>
      </BarRowWrapper>

      <Line $status={step === 0 || step === 1 ? Status.PENDING : Status.FILLED} />
      <BarRowWrapper>
        <Circle $status={step === 0 || step === 1 ? Status.PENDING : Status.READY} />
        <BarText size={14} height={20} $status={step === 0 || step === 1 ? Status.PENDING : Status.READY}>
          Create Project
        </BarText>
      </BarRowWrapper>
    </BarContainer>
  );
};
