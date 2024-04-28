import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosService } from '../usuarios/usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/domain/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Usuario ])
  ],
  controllers: [AuthController],
  providers: [AuthService, UsuariosService],
})
export class AuthModule {}
