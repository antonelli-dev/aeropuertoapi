import { Injectable } from '@nestjs/common';
import { CreateHistorialaboralDto } from './dto/create-historialaboral.dto';
import { UpdateHistorialaboralDto } from './dto/update-historialaboral.dto';
import { Historialaboral } from 'src/domain/entities/historialaboral.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class HistorialaboralService {
  constructor(
    @InjectRepository(Historialaboral)
    private readonly _historialaboralRepository: Repository<Historialaboral>
) {}

async getAll(): Promise<Historialaboral[]> {
    return await this._historialaboralRepository.find();
}

async create(dto: CreateHistorialaboralDto):  Promise<Historialaboral> {
    const historialaboral: Historialaboral = dto as Historialaboral;
    console.log("test",historialaboral);
    await this._historialaboralRepository.save(historialaboral);


    return historialaboral;
}

async modify(id: number, dto: UpdateHistorialaboralDto):  Promise<Historialaboral> {
    const historialaboral: Historialaboral = dto as Historialaboral;
    await this._historialaboralRepository.update(dto.id_de_historial, historialaboral);

    return historialaboral;
}

async delete(id: number) {
    return this._historialaboralRepository.delete({
        id_de_historial: id
    });
}
}
