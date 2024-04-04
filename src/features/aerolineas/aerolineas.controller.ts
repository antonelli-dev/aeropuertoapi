import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Aerolinea } from './aerolineas.entity'; // Assuming Aerolinea entity exists
import { AerolineaService } from './aerolineas.service'; // Assuming AerolineaService exists

@Controller('aerolineas')
export class AerolineasController {
  constructor(private readonly aerolineaService: AerolineaService) {}

  @Get()
  async findAll(): Promise<Aerolinea[]> {
    return await this.aerolineaService.findAll();
  }

  @Post()
  async create(@Body() aerolinea: Aerolinea): Promise<Aerolinea> {
    return await this.aerolineaService.create(aerolinea);
  }

  @Put(':id')
  async edit(@Param('id') id: number, @Body() aerolinea: Aerolinea): Promise<Aerolinea> {
    return await this.aerolineaService.edit(+id, aerolinea);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.aerolineaService.delete(+id);
  }
}
