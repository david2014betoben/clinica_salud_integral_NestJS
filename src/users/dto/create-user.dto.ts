import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

import { Role } from '../../generated/prisma/client.js';

export class CreateUserDto {
  @IsEmail({}, { message: 'El email debe tener un formato válido' })
  @IsNotEmpty({ message: 'El email es obligatorio' })
  email: string;

  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @MinLength(6, {
    message: 'La contraseña debe tener al menos 6 caracteres',
  })
  @MaxLength(50, {
    message: 'La contraseña no puede superar los 50 caracteres',
  })
  password: string;

  @IsEnum(Role, {
    message: 'El rol proporcionado no es válido',
  })
  @IsNotEmpty({ message: 'El rol es obligatorio' })
  role: Role;
}
