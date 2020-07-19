var express = require('express');
var app = express();

// nosso primeiro middleware
app.use(express.static('./public'));

module.exports = app; // exportando nossa instância do Express