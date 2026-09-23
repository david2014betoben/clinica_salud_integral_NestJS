import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { CitasService } from './citas.service.js';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';

@ApiBearerAuth()
@Controller('citas')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('RECEPCIONISTA')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @ApiOperation({ summary: 'Agregar una nueva cita' })
  @Post()
  create(@Body() body: any) {
    return this.citasService.create(body);
  }

  @ApiOperation({ summary: 'Lista todas las citas creadas' })
  @Get()
  findAll() {
    return this.citasService.findAll();
  }
}
