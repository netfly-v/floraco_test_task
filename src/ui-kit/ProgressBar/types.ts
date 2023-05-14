export enum Status {
  READY = 'READY',
  PENDING = 'PENDING',
  FILLED = 'FILLED',
}

export type ProgressBarProps = {
  step: number;
};
