var express = require('express');
var app = express();
var consign =  require('consign');
var bodyParser = require('body-parser');



app.set('secret','homemavestruz');

// nosso primeiro middleware
app.use(express.static('./public'));
app.use(bodyParser.json());


consign( {cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes/auth.js')
    .then('routes')
    .into(app);

// require('../app/routes/fotos')(app);
// require('../app/routes/grupo')(app);

module.exports = app; // exportando nossa instância do Express