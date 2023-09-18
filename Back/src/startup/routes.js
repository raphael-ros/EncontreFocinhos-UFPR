const express = require('express');
const ongs = require('../routes/ongs');
 
module.exports = function(app) {
    app.use(express.json());
    app.use('/api/ong', ongs);
}