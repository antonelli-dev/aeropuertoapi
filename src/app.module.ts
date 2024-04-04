import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AerolineasController } from './application/features/aerolineas/aerolineas.controller';
import { AerolineasModule } from './application/features/aerolineas/aerolineas.module';
import { AerolineaService } from './application/features/aerolineas/aerolineas.service';
import { Aerolinea } from './domain/entities/aerolineas.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Ellanomeama1#',
    database: 'aerolinea',
    entities: [Aerolinea],
    synchronize: true,
  }), AerolineasModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
