//Importando ORM do Banco de Dados MongoDB
const mongoose = require('mongoose')

//Criando uma nova Schema no Banco de Dados
const ProductSchema = new mongoose.Schema({
    Name : 'String',
    Price : 'Number',
    Peso : 'Number',

})

//Exportando essa Schema
mongoose.model("Product", ProductSchema)