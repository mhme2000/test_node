//Importando ORM Banco de Dados MongoDB
const mongoose = require('mongoose')
//Importando Express - microframework 
const express = require('express')
//Importando o require-Dir - biblioteca para importação de arquivos locais
const requireDir = require('require-dir')
//Conectando com o Banco de Dados
mongoose.connect('mongodb+srv://eckart14:Marcos2103@cluster0-vwikr.mongodb.net/products?retryWrites=true&w=majority', {
     useNewUrlParser: true,
     useUnifiedTopology: true
})

//Atribuindo para a constante app o express
const app = express()
//Solicitando que o express entenda formatos de dados json
app.use(express.json())
//Importando pasta de models
requireDir('./app/models')
//Importando arquivo routes
app.use('/api', require('./app/routes'))
//Disponibilizando o servidor na porta específica
app.listen(3333)
