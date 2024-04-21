import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AerolineasModule } from './application/features/aerolineas/aerolineas.module';
import { Aerolinea } from './domain/entities/aerolineas.entity';
import { ConfigModule } from '@nestjs/config';
import { PuestosModule } from './application/features/puestos/puestos.module';
import { Puesto } from './domain/entities/puesto.entity';
import { EmpleadosModule } from './application/features/empleados/empleados.module';
import { Empleado } from './domain/entities/empleado.entity';
import { AusenciasModule } from './application/features/ausencias/ausencias.module';
import { Ausencia } from './domain/entities/ausencia.entity';
import { CapacitacionesModule } from './application/features/capacitaciones/capacitaciones.module';
import { Capacitacion } from './domain/entities/capacitaciones.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Aerolinea, Puesto, Empleado, Ausencia, Capacitacion],
    synchronize: true,
  }), AerolineasModule, PuestosModule, EmpleadosModule, AusenciasModule, CapacitacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
