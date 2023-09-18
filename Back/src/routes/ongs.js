const express = require('express');
const router = express.Router();
const ONGController = require('../controller/ONGController');
 
router

    .post('/', ONGController.create)

    //getAll
    .get('/', ONGController.getAll) 

    //getById
    .get('/:id', ONGController.getById)

    //Dar o get e Atualizar
    .put('/:id', ONGController.updateOne)

    //Deletar
    .delete('/:id', ONGController.deleteOne)
 
module.exports = router