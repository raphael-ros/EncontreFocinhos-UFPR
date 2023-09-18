const mongoose = require('mongoose');
 
const ONG = mongoose.model('ONG', {
    nome: String,
    telefone: Number,
    email: String,
    cnpj: Number,
    endereco: String,
    cidade: String,
    estado: String,
    descricao: String,
    animais: Object
})
 
module.exports = ONG;