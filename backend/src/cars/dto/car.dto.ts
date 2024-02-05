import { EngineType } from '../car.entity';
import {
  IsNumber,
  IsString,
  IsEnum,
  IsNotEmpty,
  MinLength,
  Min,
  Max,
  IsOptional,
} from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  brand: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  version: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  model: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1900)
  @Max(new Date().getFullYear())
  year: number;

  @IsEnum(EngineType)
  @IsNotEmpty()
  engineType: EngineType;
}

export class UpdateCarDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  brand?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  version?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  model?: string;

  @IsNumber()
  @IsOptional()
  @Min(1900)
  @Max(new Date().getFullYear())
  year?: number;

  @IsEnum(EngineType)
  @IsOptional()
  engineType?: EngineType;
}
