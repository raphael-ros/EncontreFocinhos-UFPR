const mongoose = require('mongoose');
 
const Animal = mongoose.model('Animal', {
    nome: String,
    sexo: String,
    aniversario: Date,
    castrado: Boolean,
    raca: String,
    descricao: String,
    historico: Object
})
 
module.exports = Animal;