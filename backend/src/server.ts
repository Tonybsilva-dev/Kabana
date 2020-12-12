import express from 'express'
import cors from 'cors'
import requireDir from 'require-dir'
import mongoose from 'mongoose';
require('dotenv').config();

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(`${process.env.CONNECT_DB}`, { useNewUrlParser: true })

// Requisitando os models
requireDir('./models')
app.use('/api', require('./routes'))
app.listen(`${process.env.PORT}`)
