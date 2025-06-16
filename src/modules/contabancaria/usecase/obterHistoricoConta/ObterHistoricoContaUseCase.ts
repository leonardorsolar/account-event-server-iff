import ContaBancaria from "../../domain/ContaBancaria"
import { IUseCase } from "../../../../share/core/IUseCase"
import AppError from "../../../../share/core/AppError"
import { Result } from "../../../../share/core/Result"
import { Either, left, right } from "../../../../share/core/either"
import IContaBancariaRepository from "../../infra/repository/IContaBancariaRepository"

type Response = Either<AppError, Result<any>>

export default class ObterHistoricoContaUseCase implements IUseCase {
    constructor(readonly contaBancariaRepository: IContaBancariaRepository) {}

    async execute(request?: any): Promise<Response> {
        console.log("ObterHistoricoContaUseCase")
        try {
            const contaAlreadyExists =
                await this.contaBancariaRepository.getProprietarioId(
                    request.proprietario
                )
            console.log(contaAlreadyExists)
            if (!contaAlreadyExists) {
                return left(
                    new AppError(`Ops. Conta não existente.`, 400)
                ) as Response
            }
            const idDaConta = contaAlreadyExists.id
            const idDaContaOrigem = contaAlreadyExists.numero

            const transacoes =
                await this.contaBancariaRepository.ObterHistoricoConta(
                    idDaConta
                )
            console.log("transaoes")

            let historico = ""
            let saldo: number = 0
            historico += "Data\t\tValor\tSaldo\tNota\n"
            transacoes.forEach((item) => {
                saldo += item.valor
                historico += `${item.data.toLocaleDateString()}\t${
                    item.valor
                }\t${saldo}\t${item.nota}\n`
            })

            console.log(historico)

            return right(Result.ok<any>(transacoes))
        } catch (error: any) {
            return left(
                new AppError(
                    `Erro ao pesquisar no banco de dados. Tente novamente ${error}`,
                    500
                )
            )
        }
    }
}
