const mongoose = require('mongoose');
 
const Vacina = mongoose.model('Vacina', {
    nome: String,
    doses: String
})
 
module.exports = Vacina;