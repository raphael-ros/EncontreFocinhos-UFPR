const mongoose = require('mongoose');
 
const Doenca = mongoose.model('Doenca', {
    nome: String,
    data: Date,
    descricao: String,
    tratamento: Boolean
})
 
module.exports = Doenca;