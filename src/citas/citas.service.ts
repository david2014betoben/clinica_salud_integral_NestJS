import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { PacientesService } from '../pacientes/pacientes.service.js';
import { MedicosService } from '../medicos/medicos.service.js';
import { CreateCitaDto } from './dto/create-cita.dto.js';

@Injectable()
export class CitasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pacientesService: PacientesService,
    private readonly medicosService: MedicosService,
  ) {}

  async create(data: CreateCitaDto) {
    const paciente = await this.pacientesService.findOne(data.id_paciente);

    if (!paciente) {
      throw new NotFoundException('El paciente no existe');
    }

    const medico = await this.medicosService.findOne(data.id_medico);

    if (!medico) {
      throw new NotFoundException('El médico no existe');
    }

    const fecha = new Date(data.fecha);

    const [horas, minutos] = data.hora.split(':').map(Number);

    const hora = new Date();
    hora.setHours(horas, minutos, 0, 0);

    return this.prisma.cita.create({
      data: {
        fecha,
        hora,
        id_paciente: data.id_paciente,
        id_medico: data.id_medico,
      },
    });
  }

  findAll() {
    return this.prisma.cita.findMany();
  }
}
