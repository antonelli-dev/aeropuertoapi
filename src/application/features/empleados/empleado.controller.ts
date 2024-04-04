import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { EmpleadosService } from "./empleado.service";
import { CrearEmpleadoDto } from './dtos/crear-empleado.dto';
import { ModificarEmpleadoDto } from './dtos/modificar-empleado.dto';

@Controller("empleados")
export class EmpleadosController {
    constructor(
        private readonly _empleadosService: EmpleadosService
    ){}

    @Get()
    async getAll() {
        return await this._empleadosService.getAll();
    }

    @Post()
    async create(@Body() dto: CrearEmpleadoDto) {
        return await this._empleadosService.create(dto);
    }

    @Put()
    async modify(@Body() dto: ModificarEmpleadoDto) {
        return await this._empleadosService.modify(dto);
    }

    @Delete(":id")
    async remove(id: number) {
        return await this._empleadosService.delete(id);
    }
}