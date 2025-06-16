import IHandler from "../../../../../share/core/IHandler";
import User from "../../../domain/User";
import { UserCreated } from "../../../domain/events/UserCreated";

export default class UserCreatedHandler implements IHandler {
  name = "UserCreated";

  constructor(eventDispatcher: any) {
    eventDispatcher.register(this);
  }

  async handle(event: UserCreated): Promise<void> {
    //console.log("Evento executado ");
    console.log("Salvando o evento: ", event);
  }
}

// const user = User.create("leoa", "leoa@gmail.com.br", "123456");
// const userCreated = new UserCreated(user);
// console.log(userCreated);
// const userCreatedHandler = new UserCreatedHandler();
// console.log(userCreatedHandler);
// userCreatedHandler.handle(userCreated)