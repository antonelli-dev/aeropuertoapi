import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Usuario } from 'src/domain/entities/usuario.entity';
import * as bcrypt from 'bcrypt';
import { AuthenticatedUser } from './dtos/authenticated-user.dto';

@Injectable()
export class AuthService {
    
    constructor(
        private readonly _userService: UsuariosService
    ) {}

    async loginUser(usuario: string, password: string): Promise<AuthenticatedUser> {
        const user: Usuario = await this._userService.findByName(usuario);

        if( !user ) {
            throw new NotFoundException("No se ha podido encontrar al usuario.");
        }

        
        const isMatch: boolean= await bcrypt.compare(password, user.password);


        if( !isMatch ) {
            throw new BadRequestException("El nombre de usuario o contraseña es incorrecto.");
        }

        const authenticated: AuthenticatedUser = new AuthenticatedUser();
        authenticated.id = user.id;
        authenticated.nombre = user.nombre;
        
        return authenticated; 

    }

}
