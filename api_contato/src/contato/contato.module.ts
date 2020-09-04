import { ContatoService } from './contato.service';
import { ContatoController } from './contato.controller';
import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ContatoVarejao } from '../entity/contato/contato.varejao.entity';
import { ContatoMacapa } from '../entity/contato/contato.macapa.entity';
import { VarejaoRepository } from './repository/contato.varejao.repository';
import { MacapaRepository } from './repository/contato.macapa.repository';
import { DatabaseEnum } from '../commons/enum';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContatoMacapa]),
    TypeOrmModule.forFeature([ContatoVarejao], DatabaseEnum.VAREJO_DB_NAME),
  ],
  controllers: [ContatoController],
  providers: [ContatoService, VarejaoRepository, MacapaRepository],
  exports: [TypeOrmModule],
})
export class ContatoModule {}
