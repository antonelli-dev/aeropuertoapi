import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Aerolinea } from './aerolineas.entity';

@Entity()
export class Empleado {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 126 })
    nombres: string;
    
    @Column("varchar", { length: 126 })
    apellidos: string;

    @Column("date")
    fecha_nacimiento: Date;

    @Column("varchar", { length: 2 })
    genero: string;
    
    @Column("text")
    direccion: string;

    @Column("varchar", { length: 30 })
    telefono: string;

    @Column("varchar", { length: 30 })
    correo_electronico: string;

    @Column("integer")
    aerolinea_id: number;

    @Column("integer")
    puesto_id: number;

    @Column("date")
    fecha_contratacion: Date;

    @Column("integer")
    salario: number;

    @OneToOne(() => Aerolinea)
    @JoinColumn({ name: "aerolinea_id"})
    aerolinea: Aerolinea
};