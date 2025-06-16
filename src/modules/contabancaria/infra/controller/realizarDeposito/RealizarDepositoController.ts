import { Response, Request } from "express"
import { IUseCase } from "../../../../../share/core/IUseCase"
import AppError from "../../../../../share/core/AppError"

export default class RealizarDepositoController {
    constructor(readonly realizarDepositoUseCase: IUseCase) {}
    //constructor(readonly usersRepository: IUsersRepository, readonly userTokensRepository: IUsersTokensRepository, readonly mailProvider: IMailProvider) {}

    async handle(req: Request, res: Response): Promise<Response> {
        console.log("RealizarDepositoController")
        console.log(req.body)
        try {
            const result = await this.realizarDepositoUseCase.execute(req.body)
            console.log("retorno na controller RealizarDepositoController")
            if (result.isLeft()) {
                const error = result.value
                //badRequest
                return res.status(error.statusCode).json(error.message)
            } else {
                return res.status(200).json(result.value)
            }
            //console.log(output);
        } catch (error) {
            throw new AppError(`Erro inesperado do sistema ${error}`, 500)
        }
    }
}
