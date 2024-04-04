import { Module } from '@nestjs/common';
import { AerolineaService } from './aerolineas.service';
import { AerolineasController } from './aerolineas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aerolinea } from './aerolineas.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Aerolinea])
    ],
    providers: [AerolineaService],
    exports: [AerolineaService],
    controllers: [AerolineasController]
})
export class AerolineasModule {
}
