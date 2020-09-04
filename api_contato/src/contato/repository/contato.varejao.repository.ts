import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContatoVarejao } from '../../entity/contato/contato.varejao.entity';
import { Contato } from '../../entity/contato/contato.entity';
import { DatabaseEnum } from '../../commons/enum';

@Injectable()
export class VarejaoRepository {
  constructor(
    @InjectRepository(ContatoVarejao, DatabaseEnum.VAREJO_DB_NAME)
    private varejaoRepository: Repository<ContatoVarejao>,
  ) {}

  async cadastrarContato(contatos: Contato[]): Promise<any> {
    try {
      await this.varejaoRepository.save(contatos);
    } catch (e) {
      throw new Error(`Erro ao cadastrar contato`);
    }
  }
}
