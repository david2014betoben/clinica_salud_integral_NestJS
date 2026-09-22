import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

import { PrismaService } from '../prisma/prisma.service.js';
import { Role } from '../generated/prisma/client.js';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    // Verificar si el email ya existe
    const userExistente = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (userExistente) {
      throw new ConflictException(
        `El email ${createUserDto.email} ya está registrado`,
      );
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
        role: createUserDto.role,
      },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });

    return user;
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // Verificar que el usuario exista
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    // Si se está cambiando el email, comprobar que no esté ocupado
    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const emailExistente = await this.prisma.user.findUnique({
        where: {
          email: updateUserDto.email,
        },
      });

      if (emailExistente) {
        throw new ConflictException(
          `El email ${updateUserDto.email} ya está registrado`,
        );
      }
    }

    // Preparar los datos para actualizar
    const data: {
      email?: string;
      password?: string;
      role?: Role;
    } = {};

    if (updateUserDto.email !== undefined) {
      data.email = updateUserDto.email;
    }

    if (updateUserDto.role !== undefined) {
      data.role = updateUserDto.role;
    }

    // Si viene una nueva contraseña, se vuelve a encriptar
    if (updateUserDto.password !== undefined) {
      data.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    return this.prisma.user.update({
      where: {
        id,
      },
      data,
      select: {
        id: true,
        email: true,
        role: true,
      },
    });
  }

  async remove(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    return this.prisma.user.delete({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
      },
    });
  }
}
