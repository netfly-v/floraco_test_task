export type AddProjectProps = {
  step: number;
  onChangeStep: (n: number) => void;
};

type ProjectFormValue<T> = {
  value: T;
};

export type ProjectFormType = {
  name: ProjectFormValue<string>;
  url: ProjectFormValue<string>;
  category: ProjectFormValue<string>;
  goal: ProjectFormValue<string>;
  workersQty: ProjectFormValue<number>;
  launch: ProjectFormValue<string>;
  email: ProjectFormValue<string>;
};
