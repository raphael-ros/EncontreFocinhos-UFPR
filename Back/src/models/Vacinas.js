const mongoose = require('mongoose');
 
const Vacina = mongoose.model('Vacina', {
    nome: String,
    dose: String,
    data: Date,
    lote: String
})
 
module.exports = Vacina;