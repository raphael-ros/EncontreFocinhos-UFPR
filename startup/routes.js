const express = require('express');
const ongs = require('../routes/ongs');
const caes = require('../routes/caes')
 
module.exports = function(app) {
    app.use(express.json());
    app.use('/api/ongs', ongs);
    app.use('/api/caes', caes);
}