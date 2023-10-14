const express = require('express');
const ongs = require('../routes/ongs');
const caes = require('../routes/caes');
const vacinas = require('../routes/vacinas');
 
module.exports = function(app) {
    app.use(express.json());
    app.use('/api/ongs', ongs);
    app.use('/api/caes', caes);
    app.use('/api/vacinas', vacinas);
}