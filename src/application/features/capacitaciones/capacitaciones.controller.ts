import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CapacitacionesService } from './capacitaciones.service';
import { CreateCapacitacioneDto } from './dto/create-capacitacione.dto';
import { UpdateCapacitacioneDto } from './dto/update-capacitacione.dto';

@Controller('capacitaciones')
export class CapacitacionesController {
  constructor(private readonly capacitacionesService: CapacitacionesService) {}

  @Post()
  create(@Body() createCapacitacioneDto: CreateCapacitacioneDto) {
    return this.capacitacionesService.create(createCapacitacioneDto);
  }

  // @Get()
  // findbyArray(){
  //   return this.capacitacionesService.findbyArray();
  // }

  @Get()
  findAll() {
    return this.capacitacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.capacitacionesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCapacitacioneDto: UpdateCapacitacioneDto) {
    return this.capacitacionesService.update(+id, updateCapacitacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.capacitacionesService.remove(+id);
  }
}
