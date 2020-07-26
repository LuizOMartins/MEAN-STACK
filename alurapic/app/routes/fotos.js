module.exports = function (app) {

var api = app.api.fotos;

app.get('/v1/fotos',api.lista);

app.route('/v1/fotos/:id')
.get( api.buscaPorId)
.delete( api.removePorId);


}