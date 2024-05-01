import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from 'src/domain/entities/empleado.entity';
import { EmpleadosController } from './empleado.controller';
import { EmpleadosService } from './empleado.service';
import { Capacitacion } from 'src/domain/entities/capacitaciones.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Empleado, Capacitacion])
    ],
    controllers: [EmpleadosController],
    providers: [EmpleadosService],
    exports: [EmpleadosService]
})
export class EmpleadosModule {}
