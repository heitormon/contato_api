import { MigrationInterface, QueryRunner } from 'typeorm';

import { DatabaseEnum } from '../commons/enum';

import * as listaContatos from '../contato-input/contacts-macapa';

export class macapaRepository1599153930320 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('MACAPA REPOSITORY');
    queryRunner.query(`CREATE table ${DatabaseEnum.MACAPA_TABLE} (
        id serial PRIMARY KEY,
        nome VARCHAR ( 200 ) NOT NULL,
        celular VARCHAR ( 20 ) NOT NULL
    );  `);
    queryRunner.query(`CREATE table ${DatabaseEnum.USER_TABLE} (
      id serial PRIMARY KEY,
      username VARCHAR ( 100 ) NOT NULL,
      password VARCHAR ( 13 ) NOT NULL
  );  `);
    listaContatos.default.contacts.map(contato => {
      queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into(DatabaseEnum.MACAPA_TABLE)
        .values([{ nome: contato.name, celular: contato.cellphone }])
        .execute();
    });

    queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(DatabaseEnum.USER_TABLE)
      .values([{ username: 'username', password: 'password' }])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP table ${DatabaseEnum.MACAPA_TABLE}; `);
    queryRunner.query(`DROP table ${DatabaseEnum.USER_TABLE}; `);
  }
}
