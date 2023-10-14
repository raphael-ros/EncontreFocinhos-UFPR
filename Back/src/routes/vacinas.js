const express = require('express');
const router = express.Router();
const VacinaController = require('../controller/VacinaController');
 
router

    .post('/', VacinaController.create)

    //getAll
    .get('/', VacinaController.getAll) 

    //getById
    .get('/:id', VacinaController.getById)

    //Dar o get e Atualizar
    .put('/:id', VacinaController.updateOne)

    //Deletar
    .delete('/:id', VacinaController.deleteOne)
 
module.exports = router