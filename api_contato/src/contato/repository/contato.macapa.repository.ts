import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contato } from '../../entity/contato/contato.entity';
import { ContatoMacapa } from '../../entity/contato/contato.macapa.entity';

@Injectable()
export class MacapaRepository {
  constructor(
    @InjectRepository(ContatoMacapa) private macapaRepository: Repository<ContatoMacapa>
  ) {}

  async cadastrarContato(contatos: Contato[]): Promise<any> {
    try {
      await this.macapaRepository.save(contatos);
    } catch (e) {
      throw new Error(`Contato já existente macapa`);
    }
  }
}
