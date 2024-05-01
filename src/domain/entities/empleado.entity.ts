import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Aerolinea } from './aerolineas.entity';
import { Puesto } from './puesto.entity';
import { Capacitacion } from './capacitaciones.entity';

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

    @ManyToMany(() => Capacitacion)
    @JoinTable()
    capacitaciones: Capacitacion[];

    @ManyToOne(() => Aerolinea)
    @JoinColumn({ name: "aerolinea_id"})
    aerolinea: Aerolinea

    @ManyToOne(() => Puesto)
    @JoinColumn({ name: "puesto_id"})
    puesto: Puesto
};