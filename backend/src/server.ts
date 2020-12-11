import express from 'express'
import cors from 'cors'
import requireDir from 'require-dir'

const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27018/kabana', { useNewUrlParser: true })

// Requisitando os models
requireDir('./models')
app.use('/api', require('./routes'))
app.listen(3001)
