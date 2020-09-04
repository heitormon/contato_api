import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entity/usuario.entity';
import { DatabaseEnum } from 'src/commons/enum';
import { UsuarioMacapaRepository } from './repository/usuario.macapa.repository';
import { UsuarioVarejaoRepository } from './repository/usuario.varejao.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    TypeOrmModule.forFeature([Usuario], DatabaseEnum.VAREJO_DB_NAME),
  ],
  controllers: [],
  providers: [UsuarioMacapaRepository,UsuarioVarejaoRepository],
  exports:[UsuarioMacapaRepository,UsuarioVarejaoRepository]
})
export class UsuarioModule {}
