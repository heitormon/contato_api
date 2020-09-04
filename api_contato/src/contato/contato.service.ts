import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Contato } from '../entity/contato/contato.entity';
import { MacapaRepository } from './repository/contato.macapa.repository';
import { VarejaoRepository } from './repository/contato.varejao.repository';

@Injectable()
export class ContatoService {
  constructor(
    private macapaRepository: MacapaRepository,
    private varejaoRepository: VarejaoRepository
  ) {}

  async cadastrarContato(contatos: Contato[], rede: string): Promise<any> {
    try {
      switch (rede) {
        case 'MACAPA':
          return await this.macapaRepository.cadastrarContato(contatos);
        case 'VAREJAO':
          return await this.varejaoRepository.cadastrarContato(contatos);
        default:
          throw new HttpException('Rede não encontrada', HttpStatus.NOT_FOUND);
      }
    } catch (e) {
      if(!e.status) throw new HttpException(`${e.message}`, HttpStatus.BAD_REQUEST);
      throw e;
    }
  }
}
