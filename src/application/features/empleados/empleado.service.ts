import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Empleado } from "src/domain/entities/empleado.entity";
import { In, Repository } from "typeorm";
import { CrearEmpleadoDto } from "./dtos/crear-empleado.dto";
import { ModificarEmpleadoDto } from "./dtos/modificar-empleado.dto";
import { Capacitacion } from "src/domain/entities/capacitaciones.entity";


@Injectable()
export class EmpleadosService {

    constructor(
        @InjectRepository(Empleado)
        private readonly _empleadosRepository: Repository<Empleado>,
        @InjectRepository(Capacitacion)
        private readonly _capacitacionRepository: Repository<Capacitacion>
    ) {}

    async getAll(): Promise<Empleado[]> {
        return await this._empleadosRepository.find({relations: ["aerolinea","puesto","capacitaciones"]});
    }

    async create(dto: CrearEmpleadoDto):  Promise<Empleado> {
        const empleado: Empleado = new Empleado();
        empleado.id = dto.id;
        empleado.nombres = dto.nombres;
        empleado.apellidos = dto.apellidos;
        empleado.fecha_nacimiento = dto.fecha_nacimiento;
        empleado.genero = dto.genero;
        empleado.direccion = dto.direccion;
        empleado.telefono = dto.telefono;
        empleado.correo_electronico = dto.correo_electronico;
        empleado.puesto_id = dto.puesto_id;
        empleado.fecha_contratacion =dto.fecha_contratacion;
        empleado.salario = dto.salario;
        empleado.aerolinea_id = dto.aerolinea_id;

        const capacitacionesCompletas = await this._capacitacionRepository.find();

        const capacitaciones: Capacitacion[] = await  this._capacitacionRepository.find({where: {
            id : In(dto.capacitaciones)
          }})
          empleado.capacitaciones = capacitaciones
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