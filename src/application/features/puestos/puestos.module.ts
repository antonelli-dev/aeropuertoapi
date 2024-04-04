import { Module } from '@nestjs/common';
import { PuestosController } from './puestos.controller';
import { PuestosService } from './puestos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Puesto } from 'src/domain/entities/puesto.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Puesto])
    ],
    controllers: [PuestosController],
    providers: [PuestosService],
    exports: [PuestosService]
})
export class PuestosModule {}
