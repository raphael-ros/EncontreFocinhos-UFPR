const mongoose = require('mongoose');
 
const Ongs = mongoose.model('ongs', {
    nome: String,
    telefone: String,
    cnpj: String,
    endereco: String,
    cidade: String,
    estado: String,
    missao: String,
    historia: String,
    responsavel: String
})
 
module.exports = Ongs;