import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cars');
  }
}
