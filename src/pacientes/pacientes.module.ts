import { Module } from '@nestjs/common';
import { PacientesController } from './pacientes.controller.js';
import { PacientesService } from './pacientes.service.js';

@Module({
  exports: [PacientesService],
  controllers: [PacientesController],
  providers: [PacientesService],
})
export class PacientesModule {}
