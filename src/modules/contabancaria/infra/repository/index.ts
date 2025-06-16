//import UsersRepositoryMemory from "./implementations/UsersRepositoryMemory";

import { connection } from "../../../../share/database"
import ContaBancariaRepositoryDatabase from "./implementations/ContaBancariaRepositoryDatabase"

const contaBancariaRepository = new ContaBancariaRepositoryDatabase(connection)
//const usersRepository = UsersRepositoryMemory.getInstance();
// o UseCase depende do nosso repositório

export { contaBancariaRepository }
