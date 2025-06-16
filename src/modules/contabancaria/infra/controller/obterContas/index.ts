import ServicoObterContasUseCase from "../../../usecase/obterContas/ServicoObterContasUseCase"
import { contaBancariaRepository } from "../../repository"
import ObterContasController from "./ObterContasController"

// falta injetar o repository
const servicoObterContas = new ServicoObterContasUseCase(
    contaBancariaRepository
)
// o GetUsersController depende do nosso GetUsersUseCase
const obterContasController = new ObterContasController(servicoObterContas)

export { obterContasController, servicoObterContas }
