import { Injectable } from "@nestjs/common";
import { Aerolinea } from "../../../domain/entities/aerolineas.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AerolineaService {

    constructor(
        @InjectRepository(Aerolinea)
        private  _aerolinearpository: Repository<Aerolinea>
        ){}

    async create(aerolinea:Aerolinea): Promise<Aerolinea> {
      return await  this._aerolinearpository.save(aerolinea);
    }

    async delete( id: number) {
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
