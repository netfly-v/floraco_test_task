type ProjectDataType = {
  name: string;
  url: string;
  category: string;
  goal: string;
  workersQty: number;
  launch: string;
  email: string;
};

export interface IProjectContext {
  values: ProjectDataType;
  setValues: (v: ProjectDataType) => void;
}
