import ObterHistoricoContaController from "./ObterHistoricoContaController"
import ObterHistoricoContaUseCase from "../../../usecase/obterHistoricoConta/ObterHistoricoContaUseCase"
import { contaBancariaRepository } from "../../repository"

// falta injetar o repository
const obterHistoricoContaUseCase = new ObterHistoricoContaUseCase(
    contaBancariaRepository
)
// o GetUsersController depende do nosso GetUsersUseCase
const obterHistoricoContaController = new ObterHistoricoContaController(
    obterHistoricoContaUseCase
)

export { obterHistoricoContaUseCase, obterHistoricoContaController }
