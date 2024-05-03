import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Empleado } from "./empleado.entity";

@Entity("ausencias")
export class Ausencia {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("integer")
    id_empleado: number;


    @ManyToOne(() => Empleado)
    @JoinColumn({name: "id_empleado"})
    empleado: Empleado;


    @Column("varchar")
    tipo: string;

    @Column("varchar")
    descripcion: string;

    @Column("date")
    fecha_inicio: Date;

    @Column("date")
    fecha_final: Date;
}
