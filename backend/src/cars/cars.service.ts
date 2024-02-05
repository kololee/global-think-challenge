import { Injectable } from '@nestjs/common';
import { Car, EngineType } from './car.entity';
import { v4 } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: v4(),
      brand: 'BMW',
      version: 'e39',
      model: 'M5',
      year: 1998,
      engineType: EngineType.V8,
    },
  ];

  getAllCars() {
    return this.cars;
  }
}
