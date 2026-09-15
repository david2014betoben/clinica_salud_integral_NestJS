import {
  Controller,
  Get,
  Body,
  Delete,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PacientesService } from './pacientes.service.js';

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Get()
  findAll() {
    return this.pacientesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const paciente = await this.pacientesService.findOne(Number(id));

    if (!paciente) {
      throw new NotFoundException(`Paciente con ID ${id} no encontrado`);
    }

    return paciente;
  }

  @Post()
  create(@Body() body: any) {
    return this.pacientesService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const paciente = await this.pacientesService.findOne(Number(id));

    if (!paciente) {
      throw new NotFoundException(`Paciente con ID ${id} no encontrado`);
    }

    return this.pacientesService.update(Number(id), body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const paciente = await this.pacientesService.findOne(Number(id));

    if (!paciente) {
      throw new NotFoundException(`Paciente con ID ${id} no encontrado`);
    }

    return this.pacientesService.remove(Number(id));
  }
}
