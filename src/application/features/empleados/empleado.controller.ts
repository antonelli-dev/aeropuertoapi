import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Put(":id")
        async modify(@Param('id') id: number, @Body() dto: ModificarEmpleadoDto) {
            return await this._empleadosService.modify(id, dto);
        }

    @Delete(":id")
    async remove(@Param('id') id: number) {
        return await this._empleadosService.delete(id);
    }
}