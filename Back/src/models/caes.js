const mongoose = require('mongoose');
 
const Caes = mongoose.model('Caes', {
    nome: String,
    raca: String,
    nascimento: Date,
    castrado: Boolean,
    // vacinas: Aprender como fazer o schema para as vacinas
    sexo: {
        type: String,
        enum:["Macho", "Fêmea"]
    },
    cor: String,
    porte: {
        type: String,
        enum: ["Grande", "Médio", "Pequeno"]
      },
    peso: Number,
    data_chegada: Date,
    historico_medico: [
        {
            data: Date,
            tratamento: String
        },
        {
            data: Date,
            tratamento: String
        }
    ],
    descricao_curta: String,
    descricao_longa: String,
    status_adocao: {
        type: String,
        enum: ["Disponível", "Adotado"]
      },
    foto: String,
    data_adocao: Date,
    observacoes_adicionais: String
})
 
module.exports = Caes;


