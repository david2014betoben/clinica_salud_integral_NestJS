import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CitasService } from './citas.service.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { CreateCitaDto } from './dto/create-cita.dto.js';

@ApiBearerAuth()
@Controller('citas')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('RECEPCIONISTA', 'GERENCIA')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @ApiOperation({ summary: 'Agregar una nueva cita' })
  @Post()
  create(@Body() body: CreateCitaDto) {
    return this.citasService.create(body);
  }

  @ApiOperation({ summary: 'Lista todas las citas creadas' })
  @Get()
  findAll() {
    return this.citasService.findAll();
  }
}
