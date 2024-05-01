

export class CrearEmpleadoDto {
    id: number;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: Date;
    genero: string;
    direccion: string;
    telefono: string;
    correo_electronico: string;
    capacitaciones?: number[];
    aerolinea_id: number;
    puesto_id: number;
    fecha_contratacion: Date;
    salario: number;
};