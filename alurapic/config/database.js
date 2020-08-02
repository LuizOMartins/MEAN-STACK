module.exports = function (uri) {
    var mongoose = require ('mongoose');

    mongoose.connect('mongodb://'+uri);

    mongoose.connection.on('connected', function () {
        console.log('Conectado ao Banco de dados: MongoDB');
    });

    mongoose.connection.on('error', function(error){
        console.log('Erro na conexão:'+ error );
    });


    mongoose.connection.on('disconnected', function(){
        console.log('Conexão desconectada do MongoDB');
    });

    process.on('SIGINT',function() {
        mongoose.connection.close(function(){
            console.log('Conexão fechada pelo terminno da aplicação');
            process.exit(0); // informa ao SO que o processo foi terminado sem erro, de maneira esperada
        });
    });

}