import {
  Controller,
  Body,
  Post,
  Res,
  HttpStatus,
  ParseArrayPipe,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { ContatoService } from './contato.service';
import { Response } from 'express';
import { ContatoMacapaDto } from '../dto/contato.macapa.dto';
import { ContatoVarejaoDto } from '../dto/contato.varejao.dto';
import { RedesEnum } from '../commons/enum';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@Controller('contato')
export class ContatoController {
  constructor(private contatoService: ContatoService) {}
  
  @Post('/varejao')
  @UseGuards(JwtAuthGuard)
  async criarContatoMacapa(
    @Res() res: Response,
    @Body(new ParseArrayPipe({items: ContatoVarejaoDto}))
    newContatosDto: ContatoVarejaoDto[],
  ) {
    if(newContatosDto.length == 0) throw new HttpException('Lista de contato vazia',HttpStatus.BAD_REQUEST);
    const newContatos = newContatosDto.map(e =>{ return e.getContato()});
    await this.contatoService.cadastrarContato(newContatos, RedesEnum.VAREJAO);
    res.status(HttpStatus.CREATED).json(newContatosDto);
  }

  @Post('/macapa')
  async criarContatoVarejao(
    @Res() res: Response,
    @Body(new ParseArrayPipe({items: ContatoMacapaDto}))
    newContatosDto: ContatoMacapaDto[],
  ) {
    if(newContatosDto.length == 0) throw new HttpException('Lista de contato vazia',HttpStatus.BAD_REQUEST);
    const newContatos = newContatosDto.map(e =>{ return e.getContato()});
    await this.contatoService.cadastrarContato(newContatos, RedesEnum.MACAPA);
    res.status(HttpStatus.CREATED).json(newContatosDto);
  }
}
