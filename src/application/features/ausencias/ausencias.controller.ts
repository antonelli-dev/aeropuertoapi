import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AusenciasService } from './ausencias.service';
import { CreateAusenciaDto } from './dto/create-ausencia.dto';
import { UpdateAusenciaDto } from './dto/update-ausencia.dto';

@Controller('ausencias')
export class AusenciasController {
  constructor(private readonly ausenciasService: AusenciasService) {}

  @Post()
  async create(@Body() createAusenciaDto: CreateAusenciaDto) {
    return await this.ausenciasService.create(createAusenciaDto);
  }

  @Get()
  async findAll() {
    return await this.ausenciasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ausenciasService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAusenciaDto: UpdateAusenciaDto) {
    return await this.ausenciasService.update(+id, updateAusenciaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.ausenciasService.remove(+id);
  }
}
