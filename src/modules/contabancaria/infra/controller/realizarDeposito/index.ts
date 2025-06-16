// import { usersRepository } from '../../repos/index'

import RealizarDepositoController from "./RealizarDepositoController"
import RealizarDepositoUseCase from "../../../usecase/realizarDeposito/RealizarDepositoUseCase"
import { contaBancariaRepository } from "../../repository"

// falta injetar o repository
const realizarDepositoUseCase = new RealizarDepositoUseCase(
    contaBancariaRepository
)
// o GetUsersController depende do nosso GetUsersUseCase
const realizarDepositoController = new RealizarDepositoController(
    realizarDepositoUseCase
)

export { realizarDepositoController, realizarDepositoUseCase }
