// DTO => Data Transfer Object inserido na pasta DTO

import ContaBancaria from "../../domain/ContaBancaria"
import Transacao from "../../domain/Transacao"

export default interface IContaBancariaRepository {
    salvar(conta: ContaBancaria): Promise<any>
    salvarTransacao(transacao: Transacao, idDaConta: number): Promise<any>
    obterContas(): Promise<ContaBancaria[]>
    getProprietarioId(proprietario: string): Promise<any>
    obterSaldoDaConta(idDaConta: number): Promise<any>
    ObterHistoricoConta(idDaConta: number): Promise<any>
    //count(): Promise<number>;
}
