const express = require('express');
const router = express.Router();
const OngController = require('../controller/OngController');
 
router

    .post('/', OngController.create)

    //getAll
    .get('/', OngController.getAll) 

    //getById
    .get('/:id', OngController.getById)

    //Dar o get e Atualizar
    .put('/:id', OngController.updateOne)

    //Deletar
    .delete('/:id', OngController.deleteOne)
 
module.exports = router