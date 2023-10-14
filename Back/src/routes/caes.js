const express = require('express');
const router = express.Router();
const CaesController = require('../controller/CaesController');
 
router

    .post('/', CaesController.create)

    //getAll
    .get('/', CaesController.getAll) 

    //getById
    .get('/:id', CaesController.getById)

    //Dar o get e Atualizar
    .put('/:id', CaesController.updateOne)

    //Deletar
    .delete('/:id', CaesController.deleteOne)
 
module.exports = router