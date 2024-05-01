import { Injectable } from '@nestjs/common';
import { CreateCapacitacioneDto } from './dto/create-capacitacione.dto';
import { UpdateCapacitacioneDto } from './dto/update-capacitacione.dto';
import { In, Repository } from 'typeorm';
import { Capacitacion } from 'src/domain/entities/capacitaciones.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CapacitacionesService {

  constructor(
    @InjectRepository(Capacitacion)
    private readonly _capacitacionesRepository: Repository<Capacitacion>
  ) {}

  create(createCapacitacioneDto: CreateCapacitacioneDto) {
    const capacitacion: Capacitacion = createCapacitacioneDto as Capacitacion;
    return this._capacitacionesRepository.insert(capacitacion);
  }

  findAll() {
    return this._capacitacionesRepository.find();
  }

  findOne(id: number) {
    return this._capacitacionesRepository.findOneBy({
      id: id
    })
  }

  findbyArray(capacitacionesArray: number[]) {
    return this._capacitacionesRepository.find({where: {
      id : In(capacitacionesArray)
    }})
  }

  update(id: number, updateCapacitacioneDto: UpdateCapacitacioneDto) {
    const capacitacion: Capacitacion = updateCapacitacioneDto as Capacitacion;
    return this._capacitacionesRepository.update(id, capacitacion);
  }

  remove(id: number) {
    return this._capacitacionesRepository.delete({
      id: id
    });
  }
}
