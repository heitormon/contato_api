import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Contato } from './contato.entity';

@Entity('contacts')
export class ContatoVarejao implements Contato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 100, unique: false })
  nome: string;

  @Column({ nullable: false, length: 13, unique: false })
  celular: string;
}
