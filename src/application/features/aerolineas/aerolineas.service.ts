import { BadRequestException, Injectable } from "@nestjs/common";
import { Aerolinea } from "../../../domain/entities/aerolineas.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Empleado } from "src/domain/entities/empleado.entity";

@Injectable()
export class AerolineaService {

    constructor(
        @InjectRepository(Aerolinea)
        private  _aerolinearpository: Repository<Aerolinea>,
        @InjectRepository(Empleado)
        private _empleadoRepository: Repository<Empleado>
        ){}
       

    async create(aerolinea:Aerolinea): Promise<Aerolinea> {
      return await  this._aerolinearpository.save(aerolinea);
    }

    async delete( id: number) {
      const registrosVerificacion= await this._empleadoRepository.findBy({ aerolinea_id: id})
      if( registrosVerificacion.length > 0 ){
        throw new BadRequestException("No puede eliminar aerolineas vinculadas a colaboradores");
      }
        await this._aerolinearpository.delete({
            id_de_aerolinea: id
        });
    }

    async edit(id: number, aerolinea:Aerolinea){
        await this._aerolinearpository.update(id,aerolinea);
        return aerolinea;
    }

    async findAll(){
        return this._aerolinearpository.find();
    }


}
