import { Module } from '@nestjs/common';
import { PacientesModule } from '../pacientes/pacientes.module.js';
import { CitasController } from './citas.controller.js';
import { CitasService } from './citas.service.js';
import { MedicosModule } from '../medicos/medicos.module.js';

@Module({
  imports: [PacientesModule, MedicosModule],
  controllers: [CitasController],
  providers: [CitasService],
})
export class CitasModule {}
