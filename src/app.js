
const mongoose = require('mongoose')
const express = require('express')
const requireDir = require('require-dir')
mongoose.connect('mongodb+srv://eckart14:Marcos2103@cluster0-vwikr.mongodb.net/products?retryWrites=true&w=majority', {
     useNewUrlParser: true,
     useUnifiedTopology: true
})


const app = express()

app.use(express.json())

requireDir('./app/models')

app.use('/api', require('./app/routes'))

app.listen(3333)
