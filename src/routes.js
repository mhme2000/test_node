const express = require('express')

const routes = express.Router()
 
routes.get('/products', ExampleController.index)
routes.post('/products/create', ExampleController.store)
routes.get('/products/{_id}', ExampleController.show)
routes.put('/products/{_id}', ExampleController.update)
routes.delete('/products/{_id}', ExampleController.destroy)


module.exports = routes