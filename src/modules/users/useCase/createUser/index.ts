import EventDispatcher from "../../../../share/EventDispatcher/EventDispatcher";
import BcryptEncoder from "../../infra/encoder/BcryptEncoder";
import { usersRepository } from "../../repos";
import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";
import UserCreatedHandler from "./handler/UserCreatedHandler";

const encoder = new BcryptEncoder(5);
const eventDispatcher = new EventDispatcher();

const createUserUseCase = new CreateUserUseCase(usersRepository, eventDispatcher, encoder);
// o CreateUserController depende do nosso GetUsersUseCase
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, eventDispatcher, createUserUseCase };

// const user = User.create("leoa", "leoa@gmail.com.br", "123456");
// const userCreated = new UserCreated(user);
// console.log(userCreated);
const userCreatedHandler = new UserCreatedHandler(eventDispatcher);
// console.log(userCreatedHandler);
//eventDispatcher.register(userCreatedHandler);

// async function createUser() {
//     const dto = {
//         // ver: name: TextUtils.sanitize(dto.username),
//         name: "leo21",
//         email: "leoa12@gmail.com.br",
//         password: "123456",
//         role: "user",
//     };
//     const result = await createUserUseCase.execute(dto);
//     console.log('result');
//     console.log(result);
// }

// createUser();
// userCreatedHandler.handle(userCreated)
