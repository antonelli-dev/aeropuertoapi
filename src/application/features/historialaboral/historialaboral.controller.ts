import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistorialaboralService } from './historialaboral.service';
import { CreateHistorialaboralDto } from './dto/create-historialaboral.dto';
import { UpdateHistorialaboralDto } from './dto/update-historialaboral.dto';

@Controller('historialaboral')
export class HistorialaboralController {
  constructor(private readonly historialaboralService: HistorialaboralService) {}

  @Post()
  async create(@Body() createHistorialaboralDto: CreateHistorialaboralDto) {
    return await this.historialaboralService.create(createHistorialaboralDto);
  }

  @Get()
  async findAll(){
    return await this.historialaboralService.getAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHistorialaboralDto: UpdateHistorialaboralDto) {
    return await this.historialaboralService.modify(+id, updateHistorialaboralDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.historialaboralService.delete(+id);
  }
}
