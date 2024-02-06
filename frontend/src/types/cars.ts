export enum EngineType {
  V8 = 'V8',
  INLINE_6 = 'INLINE_6',
  INLINE_4 = 'INLINE_4',
  V12 = 'V12',
};

export interface Car {
  id: string;
  brand: string;
  version: string;
  model: string;
  year: number;
  engineType: EngineType;
};