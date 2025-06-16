import ContaBancaria from "../../../../modules/contabancaria/domain/ContaBancaria"
import { IUseCase } from "../../../../share/core/IUseCase"
import AppError from "../../../../share/core/AppError"
import { Result } from "../../../../share/core/Result"
import { Either, left, right } from "../../../../share/core/either"
import Transacao from "../../domain/Transacao"
import { ICreateUserUseCase } from "../../../users/ports/ICreateUserUseCase"
import IContaBancariaRepository from "../../infra/repository/IContaBancariaRepository"

type Response = Either<AppError, Result<void>>

export default class CriarContaUseCase implements IUseCase {
    // constructor(readonly contaBancariaRepository: IContaBancariaRepository, readonly createUserUseCase: ICreateUserUseCase) {}
    constructor(readonly contaBancariaRepository: IContaBancariaRepository) {}
    async execute(request?: any): Promise<Response> {
        try {
            // Crie uma instância da conta bancária com os dados do request
            const novaConta = new ContaBancaria(
                request.proprietario,
                request.saldoInicial
            )

            // Chame o caso de uso de criação de usuário do módulo de origem
            //const userCreationResult = await this.createUserUseCase.execute(request);

            // Salve a nova conta na tabela contaBancaria
            const result = await this.contaBancariaRepository.salvar(novaConta)
            console.log("novaConta")
            console.log(result)
            const idDaConta = result[0].insertId
            console.log(idDaConta)
            // Crie uma transação de depósito inicial na tabela transacoes
            const depositoInicial = new Transacao(
                request.saldoInicial, // Valor do depósito inicial
                new Date(), // Data atual
                "Saldo inicial", // Nota para identificar o depósito
                novaConta.numero, // ID da conta da qual é o dono
                novaConta.numero, // ID da conta de origem (a própria conta)
                novaConta.numero // ID da conta de destino (a própria conta)
            )

            // Agora, você pode salvar a transação de depósito inicial na tabela transacoes
            await this.contaBancariaRepository.salvarTransacao(
                depositoInicial,
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
