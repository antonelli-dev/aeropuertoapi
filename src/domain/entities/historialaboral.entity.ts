import { OneToOne } from "typeorm/decorator/relations/OneToOne";
import { Empleado } from "./empleado.entity";
import { JoinColumn } from "typeorm/decorator/relations/JoinColumn";
import { Column } from "typeorm/decorator/columns/Column";
import { Puesto } from "./puesto.entity";
import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Historialaboral {
    @PrimaryGeneratedColumn("increment") 
    id_de_historial:number;
    @Column("date")
    fecha_inicio: Date ;
    @Column("integer")
    id_empleado: number;
    @Column("integer")
    id_de_puesto: number;


    @OneToOne(() => Empleado)
    @JoinColumn({name:"id_empleado"})
    empleado: Empleado ;

    @OneToOne(() => Puesto)
    @JoinColumn({name:"id_de_puesto"})
    puesto: Puesto;
}
