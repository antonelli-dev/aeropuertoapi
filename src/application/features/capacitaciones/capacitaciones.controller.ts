import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CapacitacionesService } from './capacitaciones.service';
import { CreateCapacitacioneDto } from './dto/create-capacitacione.dto';
import { UpdateCapacitacioneDto } from './dto/update-capacitacione.dto';

@Controller('capacitaciones')
export class CapacitacionesController {
  constructor(private readonly capacitacionesService: CapacitacionesService) {}

  @Post()
  async create(@Body() createCapacitacioneDto: CreateCapacitacioneDto) {
    return await this.capacitacionesService.create(createCapacitacioneDto);
  }


  @Get()
  async findAll() {
    return await this.capacitacionesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.capacitacionesService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCapacitacioneDto: UpdateCapacitacioneDto) {
    return await this.capacitacionesService.update(+id, updateCapacitacioneDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.capacitacionesService.remove(+id);
  }
}
