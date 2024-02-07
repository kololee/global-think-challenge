import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Car, EngineType } from './car.entity';
import { v4 } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/car.dto';

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
    {
      id: v4(),
      brand: 'BMW',
      version: 'e46',
      model: 'M3',
      year: 2003,
      engineType: EngineType.INLINE_6,
    },
    {
      id: v4(),
      brand: 'Toyota',
      version: 'mk4',
      model: 'Supra',
      year: 1993,
      engineType: EngineType.INLINE_6,
    },
  ];

  getAllCars(fields?: string[]) {
    if (!fields || fields.length === 0) {
      return this.cars;
    }

    return this.cars.map((item) => {
      const filteredItem: any = {};
      fields.forEach((field) => {
        if (item.hasOwnProperty(field)) {
          filteredItem[field] = item[field];
        }
      });
      return filteredItem;
    });
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

  updateCar(id: string, updatedCarFields: UpdateCarDto) {
    const car = this.getCar(id);

    // Check that at least one field is different from the original car
    const hasAtLeastOneFieldToUpdate = Object.keys(updatedCarFields).some(
      (key) => car[key] !== updatedCarFields[key],
    );
    if (!hasAtLeastOneFieldToUpdate) {
      throw new HttpException(
        'At least one field must be different from the original car',
        HttpStatus.BAD_REQUEST,
      );
    }

    const updatedCar = Object.assign(car, updatedCarFields);

    this.cars = this.cars.map((car) => (car.id === id ? updatedCar : car));

    return updatedCar;
  }

  deleteCar(id: string) {
    if (this.getCar(id)) {
      this.cars = this.cars.filter((car) => car.id !== id);
    }
    return { message: 'Car deleted successfully.' };
  }
}
