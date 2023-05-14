import styled from 'styled-components';
import {Button} from '../../ui-kit/Button';
import {ButtonProps, ButtonVariant} from '../../ui-kit/Button/types';
import {Media} from '../../ui-kit/theme/breakpoints';
import {Text} from '../../ui-kit/Typography/Text';
import bg from '../../ui-kit/assets/bg.png';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  ${Media.up.m} {
    flex-direction: row;
    padding: 0;
  }
`;

export const ProgressBarWrapper = styled.div`
  padding-top: 56px;
  margin: 0 auto;
  ${Media.up.m} {
    margin: 0;
    box-shadow: 1px 0px 0px #2d3232;
    padding: 48px 26px;
    min-width: 260px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: bottom;
  }
`;

export const ProjectForm = styled.form`
  ${Media.up.m} {
    padding: 100px 60px;
    max-width: 820px;
  }
`;

export const StepWrapper = styled.div<{$isDisplayed: boolean}>`
  display: ${({$isDisplayed}) => ($isDisplayed ? 'flex' : 'none')};
  flex-direction: column;
`;

export const Notification = styled(Text)`
  margin-top: 20px;
`;

export const Title = styled(Text)`
  margin-top: 8px;
`;

export const Label = styled.label`
  margin: 24px 0 5px;
  display: flex;
  flex-wrap: wrap;
`;

export const UrlInputWrapper = styled.div`
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
`;

export const InnerUrl = styled.div`
  opacity: 0.3;
  user-select: none;
`;

export const Input = styled.input`
  padding: 12px 16px;
  font-family: Space Grotesk;
  font-size: 16px;
  line-height: 22px;
  color: ${({theme}) => theme.palette.text.white};
  background-color: ${({theme}) => theme.palette.background.black};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const UrlInput = styled(Input)`
  border: none;
  border-radius: 0px;
  outline: none;
  padding: 0;
  display: block;
  min-width: 0px;
`;

export const NumberInput = styled(Input)`
  margin: 0 16px;
  width: 100%;
  text-align: center;
  ${Media.up.m} {
    width: 151px;
  }
`;

export const NumberButton = styled(Button)`
  width: auto;
`;

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-left: -13px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
  display: flex;
`;

export const RadioButtonsWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;

export const EmailInputWrapper = RadioButtonsWrapper;

export const EmailLabel = styled(Label)`
  margin: 0;
  margin-bottom: 16px;
`;

export const NumberInputLabel = styled(Label)`
  margin: 0;
  margin-top: 8px;
`;

export const NumberInputWrapper = styled.div`
  margin: 16px 0;
  display: flex;
`;

export const ProductLaunchLabel = NumberInputLabel;

export const StyledStepButton = styled(Button)<{variant: ButtonVariant} & ButtonProps>`
  margin-left: ${({variant}) => variant === ButtonVariant.PRIMARY && '8px'};
  margin-right: ${({variant}) => variant === ButtonVariant.SECONDARY && '8px'};
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  ${Media.up.m} {
    align-items: center;
  }
`;

export const SecondaryTitle = styled(Text)`
  margin-top: 24px;
`;

export const ResultText = styled(Text)`
  opacity: 0.3;
  margin-top: 8px;
`;
