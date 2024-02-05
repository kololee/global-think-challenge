import { EngineType } from '../car.entity';

export class CreateCarDto {
  brand: string;
  version: string;
  model: string;
  year: number;
  engineType: EngineType;
}
