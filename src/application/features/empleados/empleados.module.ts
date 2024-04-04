import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from 'src/domain/entities/empleado.entity';
import { EmpleadosController } from './empleado.controller';
import { EmpleadosService } from './empleado.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Empleado])
    ],
    controllers: [EmpleadosController],
    providers: [EmpleadosService],
    exports: [EmpleadosService]
})
export class EmpleadosModule {}
