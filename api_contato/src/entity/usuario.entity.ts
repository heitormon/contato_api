import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 200, unique: false })
  username: string;

  @Column({ nullable: false, length: 20, unique: false })
  password: string;
}
