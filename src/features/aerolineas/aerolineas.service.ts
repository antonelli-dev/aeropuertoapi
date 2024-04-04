import { Injectable } from "@nestjs/common";
import { Aerolinea } from "./aerolineas.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CrearAerolineaDto } from "../dtos/crear-aerolinea.dto";

@Injectable()
export class AerolineaService {

    constructor(
        @InjectRepository(Aerolinea)
        private  _aerolinearpository: Repository<Aerolinea>
        ){}

    async create(aerolinea:CrearAerolineaDto): Promise<Aerolinea> {
      return await  this._aerolinearpository.create(aerolinea);
    }

    async delete( id: number) {
        await this._aerolinearpository.delete(id);
    }

    async edit(id: number, aerolinea:CrearAerolineaDto){
        await this._aerolinearpository.update(id,aerolinea);
        return aerolinea;
    }

    async findAll(){
        return this._aerolinearpository.find();
    }


}
