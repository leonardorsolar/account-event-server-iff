import User from "../../domain/User";
import IUsersRepository from "../../repos/IUsersRepository";
import CreateUserDTO from "./CreateUserDTO";
import IEncoder from "../../ports/IEncoder";
import { IUseCase } from "../../../../share/core/IUseCase";
import AppError from "../../../../share/core/AppError";
import { eventDispatcher } from "./index";
import UserCreatedHandler from "./handler/UserCreatedHandler";
import { UserCreated } from "../../domain/events/UserCreated";
import UserEmail from "../../domain/UserEmail";
import UserPassword from "../../domain/UserPassword";
import UserName from "../../domain/UserName";
import { Result } from "../../../../share/core/Result";
import { Either, left, right } from "../../../../share/core/either";
import IEventDispatcher from "../../../../share/EventDispatcher/IEventDispatcher";

type Response = Either<AppError, Result<void>>;

export default class CreateUserUseCase implements IUseCase {
  constructor(readonly usersRepository: IUsersRepository, readonly eventDispatcher: IEventDispatcher, readonly encode?: IEncoder) { }

  async execute(request: CreateUserDTO): Promise<Response> {
    console.log('emailOrError');
    const emailOrError = UserEmail.create(request.email);
    console.log('passwordOrError');
    const passwordOrError = UserPassword.create(request.password);
    console.log('usernameOrError');
    const usernameOrError = UserName.create(request.name);

    console.log('dtoResult');
    const dtoResult = Result.combine([emailOrError, passwordOrError, usernameOrError]);

    if (dtoResult.isFailure) {
      console.log("dtoResult.isFailure");
      return left(new AppError(dtoResult.getErrorValue(), 401));
      //return left(Result.fail<void>(dtoResult.getErrorValue())) as Response;
    }

    console.log("email");
    const email: UserEmail = emailOrError.getValue();
    console.log("password");
    const password: UserPassword = passwordOrError.getValue();
    console.log("username");
    const username: UserName = usernameOrError.getValue();

    // usecase do accoutn CriarContaUseCase
    // se usuário falhar vai dar certo
    // criação de conta falha = faltou o rollback

    try {
      // const userAlreadyExists = await this.usersRepository.getByEmail(email.value);
      //console.log("userAlreadyExists");
      //console.log(userAlreadyExists);
      // console.log("userAlreadyExists");
      // if (userAlreadyExists) {
      //   console.log("userAlreadyExists -- erro");
      //   return left(new AppError(`Opss... O e-mail ${email.value} está associado a uma conta já existente`, 401));
      // }
      // try {
      //   console.log("encodedPassword");
      //   const encodedPassword = await this.encode?.encode(request.password);
      //   if (!encodedPassword) {
      //     console.log("encodedPassword - erro");
      //     return left(new AppError(`Ops... Erro ao codificar a senha. Tente novamente, por favor.`, 401));
      //   }
      // } catch (error) {
      //   console.log("catch - encodedPassword");
      // }

      const userOrError = User.create(username.value, email.value, password.value);
      console.log("userOrError");
      console.log(userOrError);

      if (userOrError.isFailure) {
        // entender aqui
        console.log('userOrError.isFailure');
        return left(new AppError(userOrError.getErrorValue().toString(), 401));
      }

      console.log('user: User');
      const user: User = userOrError.getValue();
      //const userBd = await this.usersRepository.save({ name: user.name.value, email: user.email.value, password: user.password.value, id_user: user.id_user.value });
      //console.log(userBd);


      // // event
      // Após criar o usuário, emita o evento UserCreated
      // const userCreatedEvent = new UserCreated({ id: userBd.id_user, name: user.name.value });
      //this.eventDispatcher.publish(userCreatedEvent);

      console.log("userCreatedEvent------")
      const userCreatedEvent = new UserCreated({ id: 1, name: user.name.value });
      console.log(userCreatedEvent)
      console.log("eventDispatcher------")
      this.eventDispatcher.publish(userCreatedEvent);

      // const userCreatedHandler = new UserCreatedHandler();
      // await eventDispatcher.register(userCreatedHandler);
      // const teste = await eventDispatcher.publish(new UserCreated(userBd));

      return right(Result.ok<void>());
    } catch (error) {
      console.log("error");
      console.log(error);
      return left(new AppError(`Erro inesperado. Tente novamente`, 500));
    }
  }
}



