const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    Name : 'String',
    Price : 'Number',
    Peso : 'Number',

})
mongoose.model("Product", ProductSchema)