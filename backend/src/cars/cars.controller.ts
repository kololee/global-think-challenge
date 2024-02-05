import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.getAllCars();
  }

  @Get(':id')
  getCar(@Param('id') id: string) {
    return this.carsService.getCar(id);
  }

  @Post()
  createCar(@Body() newCar: CreateCarDto) {
    return this.carsService.createCar(newCar);
  }
}
