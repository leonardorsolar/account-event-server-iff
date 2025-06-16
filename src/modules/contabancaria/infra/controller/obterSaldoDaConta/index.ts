import ObterSaldoDaContaController from "./ObterSaldoDaContaController"
import ObterSaldoDaContaUseCase from "../../../usecase/obterSaldoDaConta/ObterSaldoDaContaUseCase"
import { contaBancariaRepository } from "../../repository"

// falta injetar o repository
const obterSaldoDaContaUseCase = new ObterSaldoDaContaUseCase(
    contaBancariaRepository
)
// o GetUsersController depende do nosso GetUsersUseCase
const obterSaldoDaContaController = new ObterSaldoDaContaController(
    obterSaldoDaContaUseCase
)

export { obterSaldoDaContaController, obterSaldoDaContaUseCase }
