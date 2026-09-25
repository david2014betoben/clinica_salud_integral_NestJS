import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';

export class CreateCitaDto {
  @ApiProperty({ example: '2026-09-25' })
  @IsDateString({}, { message: 'La fecha debe tener un formato válido (ISO)' })
  @IsNotEmpty({ message: 'La fecha es obligatoria' })
  fecha: string;

  @ApiProperty({ example: '17:30' })
  @IsString({ message: 'La hora debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La hora es obligatoria' })
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: 'La hora debe tener el formato HH:mm, por ejemplo 17:30',
  })
  hora: string;

  @ApiProperty({ example: 1 })
  @IsInt({ message: 'El ID del paciente debe ser un número entero' })
  @IsNotEmpty({ message: 'El ID del paciente es obligatorio' })
  id_paciente: number;

  @ApiProperty({ example: 1 })
  @IsInt({ message: 'El ID del médico debe ser un número entero' })
  @IsNotEmpty({ message: 'El ID del médico es obligatorio' })
  id_medico: number;
}
