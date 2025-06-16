import Transacao from "./Transacao";

export default class ContaBancaria {
  public numero: number;
  public proprietario: string;
  public saldo: number;

  private static numeroContaInicial: number = 1234567890;
  private transacoes: Transacao[] = [];

  constructor(nome: string, saldoInicial: number) {
    this.numero = ContaBancaria.numeroContaInicial;
    ContaBancaria.numeroContaInicial++;
    this.proprietario = nome;
    this.saldo = 0;
    const idDaContaOrigem = this.numero;
    this.realizarDeposito(saldoInicial, new Date(), "Saldo inicial", idDaContaOrigem);
  }

  public getNumero(): number {
    return this.numero;
  }

  public getProprietario(): string {
    return this.proprietario;
  }

  public setProprietario(valor: string): void {
    this.proprietario = valor;
  }

  // public getSaldo(): number {
  //   return this.saldo;
  // }

  public getSaldo(): number {
    let saldo: number = 0;
    this.transacoes.forEach((item) => {
      saldo += item.valor;
    });
    return saldo;
  }

  // public realizarDeposito(valor: number): void {
  //   if (valor <= 0) {
  //     throw new Error("O valor do depósito deve ser positivo");
  //   }
  //   this.saldo += valor;
  // }

  public realizarDeposito(valor: number, data: Date, nota: string, idDaContaOrigem: number): void {
    // console.log(valor);
    if (valor < 0) {
      throw new Error("O valor do depósito deve ser positivo");
    }
    const deposito = new Transacao(valor, data, nota, this.numero, idDaContaOrigem, this.numero);
    //console.log(deposito);
    this.transacoes.push(deposito);
    this.saldo += deposito.valor;
  }

  //   public realizarSaque(valor: number): void {
  //     if (valor <= 0) {
  //       throw new Error("O valor do saque deve ser positivo");
  //     }
  //     if (this.saldo - valor < 0) {
  //       throw new Error("Fundos insuficientes para este saque");
  //     }
  //     this.saldo -= valor;
  //   }
  // }

  public realizarSaque(valor: number, data: Date, nota: string, idDaContaDestino: number): void {
    if (valor <= 0) {
      throw new Error("O valor do saque deve ser positivo");
    }
    if (this.saldo - valor < 0) {
      throw new Error("Fundos insuficientes para este saque");
    }
    const saque = new Transacao(-valor, data, nota, this.numero, this.numero, idDaContaDestino);
    this.transacoes.push(saque);
    this.saldo += saque.valor;
  }

  public getHistoricoConta(): string {
    let historico = "";
    let saldo: number = 0;
    historico += "Data\t\tValor\tSaldo\tNota\n";
    this.transacoes.forEach((item) => {
      saldo += item.valor;
      historico += `${item.data.toLocaleDateString()}\t${item.valor}\t${saldo}\t${item.nota}\n`;
    });

    return historico;
  }
}
