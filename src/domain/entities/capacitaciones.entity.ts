import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Capacitacion {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 100 })
    nombre: string;

    @Column("varchar", { length: 100 })
    descripcion: string;

    @Column("date")
    fecha_inicio: string;

    @Column("date")
    fecha_final: string;
}
