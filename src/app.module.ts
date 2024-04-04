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
    entities: [Aerolinea, Puesto, Empleado],
    synchronize: true,
  }), AerolineasModule, PuestosModule, EmpleadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
