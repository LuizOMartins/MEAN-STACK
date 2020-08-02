var mongoose =  require('mongoose');


var api = {};

api.lista = function (req,res){
    var model =  mongoose.model('Foto');

    //SINCRONO
    // model.find(function(error, fotos){ // busca todos
    //     if(error){ // se o error () por default o error vem undefiend
    //         res.status(500).json(error);
    //     }

    //     res.json(fotos);

    // });

    //ASSINCRONO
    model.find({})
    .then(function(fotos){
        res.json(fotos);
    },function(error){
        console.log(error);
        res.sendStatus(500);
    });
    
}

api.buscaPorId =  function(req, res){




};


api.removePorId =  function(req, res){

};


api.adiciona = function(req, res){
    var foto = req.body;
    foto._id = ++CONTADOR;
    fotos.push(foto);

    res.json(foto);


};

api.atualiza = function(req,res){

};


module.exports = api;