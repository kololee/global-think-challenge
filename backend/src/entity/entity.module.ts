import { Module } from '@nestjs/common';
import { EntityController } from './entity.controller';

@Module({
  controllers: [EntityController],
})
export class EntityModule {}
