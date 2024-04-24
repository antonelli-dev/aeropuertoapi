import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialaboralDto } from './create-historialaboral.dto';

export class UpdateHistorialaboralDto extends PartialType(CreateHistorialaboralDto) {
    id_de_historial:number;
}
