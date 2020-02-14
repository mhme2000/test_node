//Importando o módulo Router da biblioteca express
const express = require('express')
const routes = express.Router()
//Importando o Controller que será manipulado
const ProductController = require('./controllers/ProductController')
 
//Definindo o tipo de rotas e o método a ser utilizado pelo Controller
routes.get('/products', ProductController.index)
routes.post('/products/create', ProductController.store)
routes.get('/products/{_id}', ProductController.show)
routes.put('/products/{_id}', ProductController.update)
routes.delete('/products/{_id}', ProductController.destroy)

//Exportando o arquivo routes
module.exports = routes