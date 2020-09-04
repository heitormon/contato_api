import { Contato } from '../entity/contato/contato.entity';

import { IsNotEmpty, Matches, MaxLength } from 'class-validator';

export class ContatoVarejaoDto{

  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  @Matches(/\d{13}$/)
  @MaxLength(13,{message:'Número de celular inválido'})
  celular: string;


  getContato(): Contato{
    return new Contato(this.nome,this.celular);
  }
  
}
