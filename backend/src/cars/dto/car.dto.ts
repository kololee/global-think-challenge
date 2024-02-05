import { EngineType } from '../car.entity';

export class CreateCarDto {
  brand: string;
  version: string;
  model: string;
  year: number;
  engineType: EngineType;
}

export class UpdateCarDto {
  brand?: string;
  version?: string;
  model?: string;
  year?: number;
  engineType?: EngineType;
}
