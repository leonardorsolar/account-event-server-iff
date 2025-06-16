import { IUseCase } from "../../../../../share/core/IUseCase"
import AppError from "../../../../../share/core/AppError"
import { Response, Request } from "express"

export default class ObterHistoricoContaController {
    constructor(readonly obterSaldoDaContaUseCase: IUseCase) {}
    //constructor(readonly usersRepository: IUsersRepository, readonly userTokensRepository: IUsersTokensRepository, readonly mailProvider: IMailProvider) {}

    async handle(req: Request, res: Response): Promise<Response> {
        console.log("ObterHistoricoContaController")
        //console.log(req.query)
        try {
            const result = await this.obterSaldoDaContaUseCase.execute(
                req?.body
            )
            console.log("retorno na controller ObterHistoricoContaController")
            console.log(result)
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
