const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    async index(req, res) {
    //    const example
     //   await example req.params
        return res.json({message: "Essa é a listagem de produtos."})

    },
    async show(req, res) {
        //    const example
         //   await example req.params
            return res.json({message: "Essa é a exibição detelhada de um produto."})

    },
    async store(req, res) {
        //    const example
         //   await example req.params
            return res.json({message: "Criando novo produto"})
    
        },
    async update(req, res) {
        //    const example
         //   await example req.params
            return res.json({message: "Editando produto existente"})
    
        },
    
    async destroy(req, res) {
        //    const example
         //   await example req.params
            return res.json({message: "Arquivo deletado com sucesso"})
    
        },
}