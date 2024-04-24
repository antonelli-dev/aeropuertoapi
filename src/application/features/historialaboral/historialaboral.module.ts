import { Module } from '@nestjs/common';
import { HistorialaboralService } from './historialaboral.service';
import { HistorialaboralController } from './historialaboral.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Historialaboral } from 'src/domain/entities/historialaboral.entity';

@Module({
  controllers: [HistorialaboralController],
  providers: [HistorialaboralService],
  imports: [TypeOrmModule.forFeature([Historialaboral])]
})
export class HistorialaboralModule {}
