import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Puesto } from "src/domain/entities/puesto.entity";
import { Repository } from "typeorm";
import { CrearPuestoDto } from "./dtos/crear-puesto.dto";
import { ModificarPuestoDto } from "./dtos/modificar-puesto.dto";

@Injectable()
export class PuestosService {

    constructor(
        @InjectRepository(Puesto)
        private readonly _puestosRepository: Repository<Puesto>
    ) {}

    async getAll(): Promise<Puesto[]> {
        return await this._puestosRepository.find();
    }

    async create(dto: CrearPuestoDto):  Promise<Puesto> {
        const puesto: Puesto = dto as Puesto;
        await this._puestosRepository.save(puesto);


        return puesto;
    }

    async modify(dto: ModificarPuestoDto):  Promise<Puesto> {
        const puesto: Puesto = dto as Puesto;
        await this._puestosRepository.update(dto.id, puesto);

        return puesto;
    }

    async delete(id: number) {
        return this._puestosRepository.delete({
            id: id
        });
    }

};