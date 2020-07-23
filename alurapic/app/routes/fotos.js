var api = require('../api/fotos');

module.exports = function (app) {


app.get('/v1/fotos',api.lista);


}