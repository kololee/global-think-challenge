export enum EngineType {
  V8 = 'V8',
  V6 = 'V6',
  INLINE_4 = 'INLINE_4',
  INLINE_6 = 'INLINE_6',
}

export class Car {
  id: string;
  brand: string;
  version: string;
  model: string;
  year: number;
  engineType: EngineType;
}
