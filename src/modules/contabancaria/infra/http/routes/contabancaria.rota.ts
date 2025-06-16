import { Router } from "express"
import { criarContaController } from "../../controller/criarConta"
import { realizarDepositoController } from "../../controller/realizarDeposito"
import { obterSaldoDaContaController } from "../../controller/obterSaldoDaConta"
import { obterHistoricoContaController } from "../../controller/obterHistoricoConta"
import { obterContasController } from "../../controller/obterContas"

const contaBancariaRota = Router()

contaBancariaRota.get("/", (req, res) => {
    res.json({ message: "Router module conta bancaria - contaBancariaRota" })
})

contaBancariaRota.get("/list", async (req, res) => {
    try {
        const contas = await obterContasController.handle(req, res)
        res.json(contas)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

contaBancariaRota.post("/", async (req, res) =>
    criarContaController.handle(req, res)
)
contaBancariaRota.post("/contaId", async (req, res) =>
    realizarDepositoController.handle(req, res)
)
contaBancariaRota.post("/saldoId", async (req, res) =>
    obterSaldoDaContaController.handle(req, res)
)
contaBancariaRota.post("/historico", async (req, res) =>
    obterHistoricoContaController.handle(req, res)
)

// contaBancariaRota.post("/", async (req, res) => {
//   console.log(req.body);
//   try {
//     await criarContaController.handle(req, res);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

export { contaBancariaRota }
