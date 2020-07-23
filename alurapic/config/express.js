var express = require('express');
var app = express();

// nosso primeiro middleware
app.use(express.static('./public'));


require('../app/routes/fotos')(app);
require('../app/routes/grupo')(app);

module.exports = app; // exportando nossa instância do Express