import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class MedicosService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.medico.findMany();
  }

  findOne(id: number) {
    return this.prisma.medico.findUnique({
      where: {
        id,
      },
    });
  }

  create(data: {
    nombre: string;
    ap_paterno: string;
    ap_materno?: string;
    email?: string;
    telefono?: string;
    especialidad_id: number;
  }) {
    return this.prisma.medico.create({
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
      especialidad_id?: number;
    },
  ) {
    return this.prisma.medico.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.medico.delete({
      where: {
        id,
      },
    });
  }
}
