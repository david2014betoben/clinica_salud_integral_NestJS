import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePacienteDto } from './dto/create-paciente.dto.js';
import { UpdatePacienteDto } from './dto/update-paciente.dto.js';

@Injectable()
export class PacientesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.paciente.findMany();
  }

  findOne(id: number) {
    return this.prisma.paciente.findUnique({
      where: { id },
    });
  }

  create(data: CreatePacienteDto) {
    return this.prisma.paciente.create({
      data: {
        ...data,
        fecha_nacimiento: data.fecha_nacimiento
          ? new Date(data.fecha_nacimiento)
          : undefined,
      },
    });
  }

  update(id: number, data: UpdatePacienteDto) {
    return this.prisma.paciente.update({
      where: {
        id,
      },
      data: {
        ...data,
        fecha_nacimiento: data.fecha_nacimiento
          ? new Date(data.fecha_nacimiento)
          : undefined,
      },
    });
  }

  remove(id: number) {
    return this.prisma.paciente.delete({
      where: {
        id,
      },
    });
  }
}
