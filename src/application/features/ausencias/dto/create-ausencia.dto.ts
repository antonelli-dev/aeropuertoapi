export class CreateAusenciaDto {
    id: number;
    id_empleado: number;
    tipo: string;
    descripcion: string;
    fecha_inicio: Date;
    fecha_final: Date;
}
