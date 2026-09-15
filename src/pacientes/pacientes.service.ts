import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

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

  create(data: {
    nombre: string;
    ap_paterno: string;
    ap_materno?: string;
    email?: string;
    telefono?: string;
    fecha_nacimiento?: Date;
  }) {
    return this.prisma.paciente.create({
      data,
    });
  }

  update(
    id: number,
    data: {
      nombre?: string;
      ap_paterno?: string;
      ap_materno?: string;
      email?: string;
      telefono?: string;
      fecha_nacimiento?: Date;
    },
  ) {
    return this.prisma.paciente.update({
      where: {
        id,
      },
      data,
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
