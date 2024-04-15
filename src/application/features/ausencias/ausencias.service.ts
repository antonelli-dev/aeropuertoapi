import { Injectable } from '@nestjs/common';
import { CreateAusenciaDto } from './dto/create-ausencia.dto';
import { UpdateAusenciaDto } from './dto/update-ausencia.dto';
import { Repository } from 'typeorm';
import { Ausencia } from './entities/ausencia.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AusenciasService {

  constructor(
    @InjectRepository(Ausencia)
    private readonly _ausenciasRepository: Repository<Ausencia>
  ) {}

  async create(createAusenciaDto: CreateAusenciaDto) {
    const ausencia: Ausencia = createAusenciaDto as Ausencia;
    console.log(ausencia)
    return await this._ausenciasRepository.insert(ausencia); 
  }

  async findAll() {
    return this._ausenciasRepository.find();
  }

  async findOne(id: number) {
    return await this._ausenciasRepository.findOneBy({
      id: id
    });
  }

  async update(id: number, updateAusenciaDto: UpdateAusenciaDto) {
    const ausencia: Ausencia = updateAusenciaDto as Ausencia;
    return await this._ausenciasRepository.update(id, ausencia);
  }

  async remove(id: number) {
    return await this._ausenciasRepository.delete(
      {
        id: id
      }
    )
  }
}
