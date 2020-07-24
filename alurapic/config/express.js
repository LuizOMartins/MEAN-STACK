var express = require('express');
var app = express();
var consign =  require('consign');

// nosso primeiro middleware
app.use(express.static('./public'));


consign( {cwd: 'app'})
    .include('api')
    .then('routes')
    .into(app);

// require('../app/routes/fotos')(app);
// require('../app/routes/grupo')(app);

module.exports = app; // exportando nossa instância do Express