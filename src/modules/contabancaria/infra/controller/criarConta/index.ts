// import { usersRepository } from '../../repos/index'

import { eventDispatcher } from "../../../../users/useCase/createUser"
import AccountCreationListener from "../../../../users/useCase/createUser/handler/AccountCreationListener"

import CriarContaController from "./CriarContaController"
import CriarContaUseCase from "../../../usecase/criarConta/CriarContaUseCase"
import { contaBancariaRepository } from "../../repository"

// falta injetar o repository
const criarContaUseCase = new CriarContaUseCase(contaBancariaRepository)
// o GetUsersController depende do nosso GetUsersUseCase
const criarContaController = new CriarContaController(criarContaUseCase)

// Crie uma instância do AccountCreationListener e injete o EventDispatcher e o CreateAccountUseCase
const accountCreationListener = new AccountCreationListener(
    eventDispatcher,
    criarContaUseCase
)

export { criarContaController, criarContaUseCase }
