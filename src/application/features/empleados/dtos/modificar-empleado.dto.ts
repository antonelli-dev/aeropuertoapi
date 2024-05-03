import { Capacitacion } from "src/domain/entities/capacitaciones.entity";

export class ModificarEmpleadoDto {
    id: number;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: Date;
    genero: string;
    direccion: string;
    telefono: string;
    correo_electronico: string;
    aerolinea_id: number;
    capacitaciones: Capacitacion[];
    puesto_id: number;
    fecha_contratacion: Date;
    salario: number;
};