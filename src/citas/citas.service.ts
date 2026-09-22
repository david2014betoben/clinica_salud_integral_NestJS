import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { PacientesService } from '../pacientes/pacientes.service.js';

@Injectable()
export class CitasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pacientesService: PacientesService,
  ) {}

  async create(data: {
    fecha: Date;
    hora: Date;
    id_paciente: number;
    id_medico: number;
    estado?: string;
  }) {
    const paciente = await this.pacientesService.findOne(data.id_paciente);

    if (!paciente) {
      throw new NotFoundException('El paciente no existe');
    }

    return this.prisma.cita.create({
      data: {
        fecha: data.fecha,
        hora: data.hora,
        estado: data.estado,
        id_paciente: data.id_paciente,
        id_medico: data.id_medico,
      },
    });
  }

  findAll() {
    return this.prisma.cita.findMany();
  }
}
