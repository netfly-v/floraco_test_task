import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {ProjectContext} from '../../App';
import {ButtonVariant} from '../../ui-kit/Button/types';
import {Text} from '../../ui-kit/Typography/Text';
import {
  ResultContainer,
  Notification,
  Title,
  SecondaryTitle,
  ResultText,
  ButtonWrapper,
  StyledStepButton,
} from './styles';

export const Result: React.FC = () => {
  const [values] = useContext(ProjectContext);
  const navigate = useNavigate();
  return (
    <ResultContainer>
      <Notification size={14} height={20} color="blue">
        Please check all information carefully
      </Notification>
      <Title size={32} height={38} weight="medium">
        Project details:
      </Title>
      <SecondaryTitle size={16} height={22} weight="medium">
        Project Name
      </SecondaryTitle>
      <ResultText size={16} height={22}>
        {values.name}
      </ResultText>
      <SecondaryTitle size={16} height={22} weight="medium">
        Project URL
      </SecondaryTitle>
      <ResultText size={16} height={22}>
        {values.url}
      </ResultText>
      <SecondaryTitle size={16} height={22} weight="medium">
        Project Category
      </SecondaryTitle>
      <ResultText size={16} height={22}>
        {values.category}
      </ResultText>
      <SecondaryTitle size={16} height={22} weight="medium">
        Main goal
      </SecondaryTitle>
      <ResultText size={16} height={22}>
        {values.goal}
      </ResultText>
      <SecondaryTitle size={16} height={22} weight="medium">
        Workers on project
      </SecondaryTitle>
      <ResultText size={16} height={22}>
        {values.workersQty}
      </ResultText>
      <SecondaryTitle size={16} height={22} weight="medium">
        Product launch
      </SecondaryTitle>
      <ResultText size={16} height={22}>
        {values.launch}
      </ResultText>
      <SecondaryTitle size={16} height={22} weight="medium">
        Contact email
      </SecondaryTitle>
      <ResultText size={16} height={22}>
        {values.email}
      </ResultText>

      <ButtonWrapper>
        <StyledStepButton onClick={() => navigate(-1)} variant={ButtonVariant.SECONDARY}>
          <Text size={16} height={22} weight="medium" color="gray">
            Go Back
          </Text>
        </StyledStepButton>
        <StyledStepButton variant={ButtonVariant.PRIMARY}>
          <Text size={16} height={22} weight="medium" color="black">
            Accept data
          </Text>
        </StyledStepButton>
      </ButtonWrapper>
    </ResultContainer>
  );
};
