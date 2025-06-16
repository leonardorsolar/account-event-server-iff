import ContaBancaria from "../../../../modules/contabancaria/domain/ContaBancaria"
import { IUseCase } from "../../../../share/core/IUseCase"
import AppError from "../../../../share/core/AppError"
import { Result } from "../../../../share/core/Result"
import { Either, left, right } from "../../../../share/core/either"
import IContaBancariaRepository from "../../infra/repository/IContaBancariaRepository"

type Response = Either<AppError, Result<ContaBancaria[]>>

export default class ServicoObterContasUseCase implements IUseCase {
    constructor(readonly contaBancariaRepository: IContaBancariaRepository) {}

    async execute(request?: any): Promise<Response> {
        console.log("ServicoObterContasUseCase")
        try {
            let contas
            contas = await this.contaBancariaRepository.obterContas()
            return right(Result.ok<ContaBancaria[]>(contas))
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
