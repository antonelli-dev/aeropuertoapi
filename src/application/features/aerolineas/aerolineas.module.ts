import { Module } from '@nestjs/common';
import { AerolineaService } from './aerolineas.service';
import { AerolineasController } from './aerolineas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aerolinea } from '../../../domain/entities/aerolineas.entity';
import { Empleado } from 'src/domain/entities/empleado.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Aerolinea, Empleado])
    ],
    providers: [AerolineaService],
    exports: [AerolineaService],
    controllers: [AerolineasController]
})
export class AerolineasModule {
}
