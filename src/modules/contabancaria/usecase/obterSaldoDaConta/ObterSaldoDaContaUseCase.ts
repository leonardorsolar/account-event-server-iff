import ContaBancaria from "../../domain/ContaBancaria"
import { IUseCase } from "../../../../share/core/IUseCase"
import AppError from "../../../../share/core/AppError"
import { Result } from "../../../../share/core/Result"
import { Either, left, right } from "../../../../share/core/either"
import IContaBancariaRepository from "../../infra/repository/IContaBancariaRepository"

type Response = Either<AppError, Result<any>>

export default class ObterSaldoDaContaUseCase implements IUseCase {
    constructor(readonly contaBancariaRepository: IContaBancariaRepository) {}

    async execute(request?: any): Promise<Response> {
        console.log("ObterSaldoDaContaUseCase")
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

            const saldo = await this.contaBancariaRepository.obterSaldoDaConta(
                idDaConta
            )
            console.log("saldo")
            console.log(saldo)
            return right(Result.ok<any>(saldo))
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
