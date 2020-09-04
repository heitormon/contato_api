import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Contato } from './contato.entity';

@Entity('contacts')
export class ContatoMacapa implements Contato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 200, unique: false })
  nome: string;

  @Column({ nullable: false, length: 20, unique: false })
  celular: string;
}
