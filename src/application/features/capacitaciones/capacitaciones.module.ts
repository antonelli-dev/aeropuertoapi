import { Module } from '@nestjs/common';
import { CapacitacionesService } from './capacitaciones.service';
import { CapacitacionesController } from './capacitaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Capacitacion } from 'src/domain/entities/capacitaciones.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Capacitacion])
  ],
  controllers: [CapacitacionesController],
  providers: [CapacitacionesService],
})
export class CapacitacionesModule {}
