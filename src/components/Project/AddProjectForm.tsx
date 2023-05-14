import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ProjectContext} from '../../App';
import {route} from '../../constants/route';
import {Badge} from '../../ui-kit/Badge';
import {Button, RadioButton} from '../../ui-kit/Button';
import {ButtonVariant} from '../../ui-kit/Button/types';
import {ProgressBar} from '../../ui-kit/ProgressBar';
import {Text} from '../../ui-kit/Typography/Text';
import {
  FormContainer,
  ProgressBarWrapper,
  StepWrapper,
  Notification,
  Title,
  Label,
  Input,
  BadgesContainer,
  ButtonWrapper,
  StyledStepButton,
  RadioButtonsWrapper,
  EmailInputWrapper,
  EmailLabel,
  NumberInputWrapper,
  NumberInput,
  NumberButton,
  ProjectForm,
  NumberInputLabel,
  ProductLaunchLabel,
  UrlInputWrapper,
  InnerUrl,
  UrlInput,
} from './styles';
import {AddProjectProps, ProjectFormType} from './types';

const badges = ['NFT', 'GameFi', 'DeFi', 'DAO', 'Ecosystem', 'Others', 'SocialFi', 'Metaverse', 'Tools'];
const radioVariantsDetails = ['Grow My Community', 'Activate Existing Members', 'Understand My Members', 'Other'];
const radioVariantsLast = ['Pre Product', 'Post Product'];

export const AddProjectForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [values, setValues] = useContext(ProjectContext);
  const navigate = useNavigate();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as typeof e.target & ProjectFormType;
    setValues({
      ...values,
      name: form.name.value,
      url: `Alphaguilty.io/${form.url.value}`,
      category: form.category.value,
      goal: form.goal.value,
      workersQty: form.workersQty.value,
      launch: form.launch.value,
      email: form.email.value,
    });
    navigate(route.result);
  };
  const onChangeStep = (n: number) => {
    setStep(n);
  };

  return (
    <FormContainer>
      <ProgressBarWrapper>
        <ProgressBar step={step} />
      </ProgressBarWrapper>
      <ProjectForm onSubmit={handleSubmit}>
        <StartProject step={step} onChangeStep={onChangeStep} />
        <ProjectDetails step={step} onChangeStep={onChangeStep} />
        <CreateProject step={step} onChangeStep={onChangeStep} />
      </ProjectForm>
    </FormContainer>
  );
};

const StartProject: React.FC<AddProjectProps> = ({step, onChangeStep}) => {
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  return (
    <StepWrapper $isDisplayed={step === 0}>
      <Notification size={14} height={20} color="blue">
        To Create Quest you need firstly create Project
      </Notification>
      <Title size={32} height={38} weight="medium">
        Add New Project
      </Title>

      <Label htmlFor="name">
        <Text size={16} height={22} weight="medium">
          Project Name (It can be changed later)
        </Text>
      </Label>
      <Input id="name" />

      <Label htmlFor="url">
        <Text size={16} height={22} weight="medium">
          Project URL (It cannot be changed after creation)
        </Text>
      </Label>
      <UrlInputWrapper>
        <InnerUrl>
          <Text size={16} height={22}>
            Alphaguilty.io/
          </Text>
        </InnerUrl>
        <UrlInput id="url" value={url} onChange={({target}) => setUrl(target.value)} />
      </UrlInputWrapper>

      <Label htmlFor="category">
        <Text size={16} height={22} weight="medium">
          Project Category (It cannot be changed after creation)
        </Text>
      </Label>
      <BadgesContainer>
        {badges.map((b) => (
          <RadioButton
            key={b}
            name="category"
            isBadge
            label={<Badge text={b} isActive={category === b} />}
            checked={category === b}
            value={b}
            onChange={() => setCategory(b)}
          />
        ))}
      </BadgesContainer>

      <ButtonWrapper>
        <Button onClick={() => onChangeStep(1)} type="button">
          <Text size={16} height={22} weight="medium" color="black">
            Add Project
          </Text>
        </Button>
      </ButtonWrapper>
    </StepWrapper>
  );
};

const ProjectDetails: React.FC<AddProjectProps> = ({step, onChangeStep}) => {
  const [activeRadio, setActiveRadio] = useState('');
  const handleRadioChange = (value: string) => {
    setActiveRadio(value);
  };

  return (
    <StepWrapper $isDisplayed={step === 1}>
      <Notification size={14} height={20} color="blue">
        Project Details
      </Notification>

      <Title size={32} height={38} weight="medium">
        What is your main goal with AlphaQuest
      </Title>
      <RadioButtonsWrapper>
        {radioVariantsDetails.map((r) => (
          <RadioButton
            key={r}
            name="goal"
            label={
              <Text size={16} height={22}>
                {r}
              </Text>
            }
            checked={activeRadio === r}
            value={r}
            onChange={() => handleRadioChange(r)}
          />
        ))}
      </RadioButtonsWrapper>

      <ButtonWrapper>
        <StyledStepButton onClick={() => onChangeStep(0)} variant={ButtonVariant.SECONDARY} type="button">
          <Text size={16} height={22} weight="medium" color="gray">
            Back
          </Text>
        </StyledStepButton>
        <StyledStepButton onClick={() => onChangeStep(2)} variant={ButtonVariant.PRIMARY} type="button">
          <Text size={16} height={22} weight="medium" color="black">
            Continue
          </Text>
        </StyledStepButton>
      </ButtonWrapper>
    </StepWrapper>
  );
};

const CreateProject: React.FC<AddProjectProps> = ({step, onChangeStep}) => {
  const [activeRadio, setActiveRadio] = useState('');
  const [workersQty, setWorkersQty] = useState<number>(0);

  const handleRadioChange = (value: string) => {
    setActiveRadio(value);
  };
  const decreaseQty = () => {
    workersQty > 0 && setWorkersQty((prev) => prev - 1);
  };
  const increaseQty = () => {
    setWorkersQty((prev) => prev + 1);
  };

  return (
    <StepWrapper $isDisplayed={step === 2}>
      <Notification size={14} height={20} color="blue">
        Create Project
      </Notification>

      <NumberInputLabel htmlFor="workersQty">
        <Text size={32} height={38} weight="medium">
          How many full-time workers on project?
        </Text>
      </NumberInputLabel>
      <NumberInputWrapper>
        <NumberButton variant={ButtonVariant.SECONDARY} onClick={decreaseQty} type="button">
          <Text size={16} height={22} weight="medium">
            -
          </Text>
        </NumberButton>
        <NumberInput
          id="workersQty"
          type="number"
          value={workersQty}
          onChange={({target}) => setWorkersQty(+target.value)}
        />
        <NumberButton variant={ButtonVariant.SECONDARY} onClick={increaseQty} type="button">
          <Text size={16} height={22} weight="medium">
            +
          </Text>
        </NumberButton>
      </NumberInputWrapper>

      <ProductLaunchLabel htmlFor="launch">
        <Text size={32} height={38} weight="medium">
          Are you pre or post product launch?
        </Text>
      </ProductLaunchLabel>
      <RadioButtonsWrapper>
        {radioVariantsLast.map((r) => (
          <RadioButton
            key={r}
            name="launch"
            label={
              <Text size={16} height={22}>
                {r}
              </Text>
            }
            checked={activeRadio === r}
            value={r}
            onChange={() => handleRadioChange(r)}
          />
        ))}
      </RadioButtonsWrapper>

      <EmailInputWrapper>
        <EmailLabel htmlFor="email">
          <Title size={32} height={38} weight="medium">
            Contact Email
          </Title>
        </EmailLabel>
        <Input id="email" />
      </EmailInputWrapper>

      <ButtonWrapper>
        <StyledStepButton onClick={() => onChangeStep(1)} variant={ButtonVariant.SECONDARY} type="button">
          <Text size={16} height={22} weight="medium" color="gray">
            Back
          </Text>
        </StyledStepButton>
        <StyledStepButton variant={ButtonVariant.PRIMARY} type="submit">
          <Text size={16} height={22} weight="medium" color="black">
            Create Project
          </Text>
        </StyledStepButton>
      </ButtonWrapper>
    </StepWrapper>
  );
};
