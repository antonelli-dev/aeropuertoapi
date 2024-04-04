import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aerolinea {
  @PrimaryGeneratedColumn('increment')
  id_de_aerolinea: number;

  @Column('varchar')
  nombre: string;

  @Column('varchar')
  descripcion: string;
}
