import express from 'express'
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

//Inicia a aplicação
const app = express();
//Habilita o Cors
app.use(cors());
//Permite o express utilizar Json
app.use(express.json());





//função para puxar de forma estática elementos de um diretório específico
// app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors());

app.listen(3333);