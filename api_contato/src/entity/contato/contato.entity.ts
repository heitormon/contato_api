export class Contato {
  id: number;
  nome: string;
  celular: string;

  constructor(nome: string, celular: string) {
    this.nome = nome;
    this.celular = celular;
  }
}
