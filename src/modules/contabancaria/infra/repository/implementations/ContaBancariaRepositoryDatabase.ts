import IConnection from "../../../../../share/database/IConnection"
import ContaBancaria from "../../../domain/ContaBancaria"
import Transacao from "../../../domain/Transacao"
import IContaBancariaRepository from "../IContaBancariaRepository"

export default class ContaBancariaRepositoryDatabase
    implements IContaBancariaRepository
{
    constructor(readonly connection: IConnection) {}

    async ObterHistoricoConta(idDaConta: number): Promise<any> {
        console.log("repositorio")
        console.log(idDaConta)
        const [transacoesidDaConta] = await this.connection.query(
            "select * from transacoes where idDaConta = ?",
            [idDaConta]
        )
        console.log(transacoesidDaConta)

        return transacoesidDaConta
    }

    async obterSaldoDaConta(idDaConta: number): Promise<any> {
        console.log("repositorio")
        console.log(idDaConta)
        const [transacoesidDaConta] = await this.connection.query(
            "select * from transacoes where idDaConta = ?",
            [idDaConta]
        )
        console.log(transacoesidDaConta)
        // select SUM(valor)  AS SALDO
        // from transacoes
        // where idDaConta = 1
        // GROUP BY idDaConta

        let saldo: number = 0
        for (const valor of transacoesidDaConta) {
            console.log(saldo)
            saldo += valor.valor
            console.log(saldo)
        }
        // transacoesidDaConta.forEach((item) => {
        //   saldo += item.valor;
        // });
        console.log(saldo)
        return saldo
    }

    async getProprietarioId(proprietario: string): Promise<any> {
        console.log(proprietario)
        const [conta] = await this.connection.query(
            "select * from contaBancaria where proprietario = ?",
            [proprietario]
        )
        console.log("conta")
        console.log(conta[0])
        return conta[0]
    }

    async salvarTransacao(
        transacao: Transacao,
        idDaConta: number
    ): Promise<any> {
        console.log(transacao)
        const query = `
      INSERT INTO transacoes (idDaConta, valor, data, nota, idDaContaDono, idDaContaOrigem, idDaContaDestino)
      VALUES (?, ?, ?,?, ?, ?, ?)
    `
        const values = [
            idDaConta,
            transacao.valor,
            transacao.data,
            transacao.nota,
            transacao.idDaContaDono,
            transacao.idDaContaOrigem,
            transacao.idDaContaDestino,
        ]
        console.log(values)
        await this.connection.query(query, values)
    }

    async salvar(conta: ContaBancaria): Promise<ContaBancaria> {
        console.log("salvar")
        // Supondo que a tabela no banco de dados tenha as colunas "numero", "proprietario" e "saldo"
        const query = `
  INSERT INTO contaBancaria (numero, proprietario, saldo)
  VALUES (?, ?, ?)
`

        const values = [conta.numero, conta.proprietario, conta.getSaldo()] // Modifique para refletir sua estrutura de dados
        console.log(values)
        console.log(values)
        const result = await this.connection.query(query, values)
        console.log(result)
        // A resposta do banco de dados pode conter informações adicionais, portanto, ajuste conforme necessário
        //const novaConta: ContaBancaria = new ContaBancaria(result[0].numero, result[0].proprietario, result[0].saldo);

        return result
    }

    async obterContas(): Promise<ContaBancaria[]> {
        const [contas] = await this.connection.query(
            "SELECT * FROM contaBancaria ",
            []
        )
        //const [accountData] = await this.connection.query("select * from branas.account where id = $1", [id]);
        return contas
    }

    async count(): Promise<number> {
        const [row] = await this.connection.query(
            "SELECT count(*)::int as count FROM contaBancaria",
            []
        )
        return row.count
    }
}
