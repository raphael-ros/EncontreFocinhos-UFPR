const express = require('express');
const app = express();
 
require('./startup/db')();
require('./startup/routes')(app);


const port = 7070;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));
 
module.exports = server;