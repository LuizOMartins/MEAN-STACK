var mongoose =  require('mongoose');


var api = {};
var model =  mongoose.model('Foto');

api.lista = function (req,res){
   

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

model
.findById(req.params.id)
.then(function(foto){
    
    if(!foto) throw Error ('Foto não encontrada');
    res.json(foto);

}, function(error){
    console.log(error);
    res.status(404).json(error);
});


};


api.removePorId =  function(req, res){
    model
    .remove({_id: req.params.id})
    .then(function(){
        res.sendStats(204);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    });

};


api.adiciona = function(req, res){

    
    model
    .create(req.body)
    .then(function(foto){
        res.json(foto);

    }),function(error){
        console.log(error);
        res.status(500).json(error);
    }


};

api.atualiza = function(req, res) {

    model.findByIdAndUpdate(req.params.id, req.body)
    .then(function(foto) {
        res.json(foto);
    }, function(error) {
        console.log(error);
        res.sendStatus(500);
    })
};


module.exports = api;