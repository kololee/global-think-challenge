import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get()
  getAllCars(@Query('fields') fields?: string) {
    let requestedFields: string[] | undefined;
    if (fields) {
      requestedFields = fields.split(',');
    }
    return this.carsService.getAllCars(requestedFields);
  }

  @Get(':id')
  getCar(@Param('id') id: string) {
    return this.carsService.getCar(id);
  }

  @Post()
  createCar(@Body() newCar: CreateCarDto) {
    return this.carsService.createCar(newCar);
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return this.carsService.deleteCar(id);
  }

  @Patch(':id')
  updateCar(@Param('id') id: string, @Body() updatedCarFields: any) {
    return this.carsService.updateCar(id, updatedCarFields);
  }
}
