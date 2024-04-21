import { Module } from '@nestjs/common';
import { AusenciasService } from './ausencias.service';
import { AusenciasController } from './ausencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ausencia } from '../../../domain/entities/ausencia.entity';

@Module({
  controllers: [AusenciasController],
  providers: [AusenciasService],
  exports: [
    AusenciasService
  ],
  imports:[
    TypeOrmModule.forFeature([Ausencia])
  ]
})
export class AusenciasModule {}
