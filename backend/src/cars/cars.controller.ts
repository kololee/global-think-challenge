import { Controller, Get } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.getAllCars();
  }
}
