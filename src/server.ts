import express from "express";
import cors from "cors"; // Importando o pacote 'cors'
import { contaBancariaRota } from "./modules/contabancaria/infra/http/routes/contabancaria.rota";
import bodyParser from "body-parser";

//npm install express cors
//npm install express cors
//npm i --save-dev @types/cors
//npm install body-parser --save

const app = express();
const PORT = 3000;

// Configurando o uso do cors
app.use(cors());

// Configurando o body-parser para analisar solicitações JSON
app.use(bodyParser.json());

app.use(contaBancariaRota);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
