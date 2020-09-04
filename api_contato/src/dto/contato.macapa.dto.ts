import { Contato } from '../entity/contato/contato.entity';

import { IsNotEmpty, Matches, MaxLength } from 'class-validator';

export class ContatoMacapaDto  {
  
  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  @Matches(/^(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$/)
  @MaxLength(20,{message:'Número de celular inválido'})
  celular: string;

  getContato(): Contato{
    return new Contato(this.nome,this.celular);
  }
}
