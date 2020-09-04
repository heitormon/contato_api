import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { ContatoModule } from './contato/contato.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContatoVarejao } from './entity/contato/contato.varejao.entity';
import { ContatoMacapa } from './entity/contato/contato.macapa.entity';
import { DatabaseEnum } from './commons/enum';
import { Usuario } from './entity/usuario.entity';

@Module({
  imports: [
    UsuarioModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'webnet',
      port: 3307,
      username: 'admin',
      password: 'admin',
      database: 'admin',
      entities: [ContatoMacapa, Usuario],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'webnet',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'admin',
      name: DatabaseEnum.VAREJO_DB_NAME,
      entities: [ContatoVarejao, Usuario],
    }),
    ContatoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
