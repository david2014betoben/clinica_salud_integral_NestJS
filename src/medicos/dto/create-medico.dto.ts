import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Min,
  MinLength,
} from 'class-validator';

export class CreateMedicoDto {
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MinLength(2, {
    message: 'El nombre debe tener al menos 2 caracteres',
  })
  @Matches(/\S/, {
    message: 'El nombre no puede contener solo espacios',
  })
  nombre: string;

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

  @IsOptional()
  @IsEmail(
    {},
    {
      message: 'El email debe tener un formato válido',
    },
  )
  email?: string;

  @IsOptional()
  @IsString({
    message: 'El teléfono debe ser una cadena de texto',
  })
  @Matches(/^\+?\d{7,15}$/, {
    message:
      'El teléfono debe contener entre 7 y 15 dígitos, opcionalmente con +',
  })
  telefono?: string;

  @IsInt({
    message: 'El ID de especialidad debe ser un número entero',
  })
  @Min(1, {
    message: 'El ID de especialidad debe ser mayor a 0',
  })
  especialidad_id: number;
}
