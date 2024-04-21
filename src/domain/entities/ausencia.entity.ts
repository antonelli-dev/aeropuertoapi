import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ausencias")
export class Ausencia {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("int")
    id_empleado: number;

    @Column("varchar")
    tipo: string;

    @Column("varchar")
    descripcion: string;

    @Column("date")
    fecha_inicio: Date;

    @Column("date")
    fecha_final: Date;
}
