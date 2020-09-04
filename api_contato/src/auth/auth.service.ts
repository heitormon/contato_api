import { Injectable } from '@nestjs/common';
import { UsuarioMacapaRepository } from 'src/usuario/repository/usuario.macapa.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usuarioMacapaRepository: UsuarioMacapaRepository, private jwtService: JwtService) {}

  async validateUser(username: string, password: string) {
    const usuario = await this.usuarioMacapaRepository.findUserByUsername(
      username,
    );
    if (usuario && usuario.password == password) {
      const { password, ...result } = usuario;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
