export default class Transacao {
  //public id: number;
  public valor: number;
  public data: Date;
  public nota: string;
  public idDaContaDono: number;
  public idDaContaOrigem: number;
  public idDaContaDestino: number;

  constructor(valor: number, data: Date, nota: string, idDaContaDono?: number, idDaContaOrigem?: number, idDaContaDestino?: number) {
    //this.id = id || 0;
    this.valor = valor;
    this.data = data;
    this.nota = nota;
    this.idDaContaDono = idDaContaDono || 0;
    this.idDaContaOrigem = idDaContaOrigem || 0;
    this.idDaContaDestino = idDaContaDestino || 0;
  }
}

export class IdTransacao {
  private readonly valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }
}
