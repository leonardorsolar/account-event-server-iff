import ContaBancaria from "../../domain/ContaBancaria"
import { IUseCase } from "../../../../share/core/IUseCase"
import AppError from "../../../../share/core/AppError"
import { Result } from "../../../../share/core/Result"
import { Either, left, right } from "../../../../share/core/either"
import Transacao from "../../domain/Transacao"
import IContaBancariaRepository from "../../infra/repository/IContaBancariaRepository"

type Response = Either<AppError, Result<void>>

export default class RealizarDepositoUseCase implements IUseCase {
    constructor(readonly contaBancariaRepository: IContaBancariaRepository) {}

    async execute(request?: any): Promise<Response> {
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

            // Crie uma transação de depósito inicial na tabela transacoes
            const deposito = new Transacao(
                request.deposito, // Valor do depósito inicial
                new Date(), // Data atual
                "Salario", // Nota para identificar o depósito
                idDaContaOrigem, // ID da conta da qual é o dono
                idDaContaOrigem, // ID da conta de origem (a própria conta)
                idDaContaOrigem // ID da conta de destino (a própria conta)
            )

            // Agora, você pode salvar a transação de depósito inicial na tabela transacoes
            await this.contaBancariaRepository.salvarTransacao(
                deposito,
                idDaConta
            )

            return right(Result.ok<void>())
        } catch (error: any) {
            return left(
                new AppError(
                    `Erro ao criar a conta. Tente novamente ${error}`,
                    500
                )
            )
        }
    }
}
