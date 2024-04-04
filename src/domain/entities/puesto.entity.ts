import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Puesto {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 30 })
    nombre: string;

    @Column("varchar", { length: 126 })
    descripcion: string;

    @Column("int")
    salario: number;
    
}