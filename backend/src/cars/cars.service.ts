import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Car, EngineType } from './car.entity';
import { v4 } from 'uuid';
import { CreateCarDto } from './dto/car.dto';

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

  getCar(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new HttpException('Car not found', HttpStatus.NOT_FOUND);
    }
    return car;
  }

  createCar(car: CreateCarDto) {
    const newCar: Car = {
      id: v4(),
      ...car,
    };
    this.cars.push(newCar);

    return newCar;
  }
}
