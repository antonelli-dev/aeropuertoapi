import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/domain/entities/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private readonly _userRepository: Repository<Usuario>
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const hash = await bcrypt.hash(createUsuarioDto.password, 12);
    createUsuarioDto.password = hash;
    createUsuarioDto.nombre = createUsuarioDto.nombre.toLowerCase();
    return await this._userRepository.insert( createUsuarioDto as Usuario );
  }

  async findAll() {
    return await this._userRepository.find();
  }

  async findOne(id: number) {
    return await this._userRepository.findBy({ id })
  }

  async findByName(nombre: string) {
    return await this._userRepository.findOneBy({ nombre })
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const hash = await bcrypt.hash(updateUsuarioDto.password, 12);
    updateUsuarioDto.password = hash;
    updateUsuarioDto.nombre = updateUsuarioDto.nombre.toLowerCase();
    return await this._userRepository.update(id, updateUsuarioDto as Usuario);
  }

  async remove(id: number) {
    return await this._userRepository.delete(id);
  }
}
