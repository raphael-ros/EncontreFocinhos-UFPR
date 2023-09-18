const mongoose = require('mongoose');
 
const ONG = mongoose.model('ONG', {
    nome: String,
    telefone: Number,
    cnpj: Number,
    endereco: String,
    cidade: String,
    estado: String,
    descricao: String
})
 
module.exports = ONG;