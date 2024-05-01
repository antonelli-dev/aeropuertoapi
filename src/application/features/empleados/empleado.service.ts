import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Empleado } from "src/domain/entities/empleado.entity";
import { Repository } from "typeorm";
import { CrearEmpleadoDto } from "./dtos/crear-empleado.dto";
import { ModificarEmpleadoDto } from "./dtos/modificar-empleado.dto";


@Injectable()
export class EmpleadosService {

    constructor(
        @InjectRepository(Empleado)
        private readonly _empleadosRepository: Repository<Empleado>
    ) {}

    async getAll(): Promise<Empleado[]> {
        return await this._empleadosRepository.find({relations: ["aerolinea","puesto"]});
    }

    async create(dto: CrearEmpleadoDto):  Promise<Empleado> {
        const empleado: Empleado = dto as Empleado;
        await this._empleadosRepository.save(empleado);


        return empleado;
    }

    async modify(id: number, dto: ModificarEmpleadoDto):  Promise<Empleado> {
        const empleado: Empleado = dto as Empleado;
        await this._empleadosRepository.update(dto.id, empleado);

        return empleado;
    }

    async delete(id: number) {
        return this._empleadosRepository.delete({
            id: id
        });
    }

};