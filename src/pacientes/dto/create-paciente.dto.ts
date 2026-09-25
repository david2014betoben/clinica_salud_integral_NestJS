import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
  IsOptional,
  IsDateString,
  MaxDate,
} from 'class-validator';

export class CreatePacienteDto {
  @ApiProperty({ example: 'Ana' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MinLength(2, {
    message: 'El nombre debe tener al menos 2 caracteres',
  })
  @Matches(/\S/, {
    message: 'El nombre no puede contener solo espacios',
  })
  nombre: string;

  @ApiProperty({ example: 'Molina' })
  @IsString({
    message: 'El apellido paterno debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message: 'El apellido paterno es obligatorio',
  })
  @MinLength(2, {
    message: 'El apellido paterno debe tener al menos 2 caracteres',
  })
  @Matches(/\S/, {
    message: 'El apellido paterno no puede contener solo espacios',
  })
  ap_paterno: string;

  @ApiProperty({ example: 'Rojas' })
  @IsOptional()
  @IsString({
    message: 'El apellido materno debe ser una cadena de texto',
  })
  @MinLength(2, {
    message: 'El apellido materno debe tener al menos 2 caracteres',
  })
  @Matches(/\S/, {
    message: 'El apellido materno no puede contener solo espacios',
  })
  ap_materno?: string;

  @ApiProperty({ example: 'ana@gmail.com' })
  @IsOptional()
  @IsEmail(
    {},
    {
      message: 'El email debe tener un formato válido',
    },
  )
  email?: string;

  @ApiProperty({ example: '78023468' })
  @IsOptional()
  @IsString({
    message: 'El teléfono debe ser una cadena de texto',
  })
  @Matches(/^\+?\d{7,15}$/, {
    message:
      'El teléfono debe contener entre 7 y 15 dígitos, opcionalmente con +',
  })
  telefono?: string;

  @ApiProperty({ example: '2009-05-15' })
  @IsOptional()
  @IsDateString(
    {},
    {
      message: 'La fecha de nacimiento debe ser una fecha válida (ISO)',
    },
  )
  fecha_nacimiento?: string;
}
