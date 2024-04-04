import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PuestosService } from './puestos.service';
import { CrearPuestoDto } from './dtos/crear-puesto.dto';
import { ModificarPuestoDto } from './dtos/modificar-puesto.dto';
@Controller("puestos")
export class PuestosController {

    constructor(
        private readonly _puestosService: PuestosService
    ) {}

    @Get()
    async getAll() {
        return await this._puestosService.getAll();
    }

    @Post()
    async create(@Body() dto: CrearPuestoDto) {
        console.log("sss ", dto)
        return await this._puestosService.create(dto);
    }

    @Put()
    async modify(@Body() dto: ModificarPuestoDto) {
        return await this._puestosService.modify(dto);
    }

    @Delete(":id")
    async remove(id: number) {
        return await this._puestosService.delete(id);
    }
}