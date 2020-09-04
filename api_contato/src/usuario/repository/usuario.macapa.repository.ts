import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/entity/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioMacapaRepository {
    constructor(
        @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>
      ) {}
    async findUserByUsername(username: string): Promise<Usuario>{
        return this.usuarioRepository.findOne({username});
    }
}
