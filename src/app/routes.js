const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')
 
routes.get('/products', ProductController.index)
routes.post('/products/create', ProductController.store)
routes.get('/products/{_id}', ProductController.show)
routes.put('/products/{_id}', ProductController.update)
routes.delete('/products/{_id}', ProductController.destroy)


module.exports = routes