module.exports = function(app) { 

    var mongoose =  require('mongoose');
    var jwt = require('jsonwebtoken');
    var api = {};

    var model = mongoose.model('Usuario');

    api.autentica  =   function ( req , res){
    model
    .findOne({login: req.body.login, senha: req.body.senha })
    .then(function(usuario){
        if(!usuario){
            console.log('Login e senha inválidos');
            res.sendStatus(401);
        }else{
            var token =  jwt.sign({login: usuario.login}
                ,app.get('secret')
                , {expireIn: 84600}
                );

                console.log('Token criado e sendo enviado no header de response');

                res.set('x-access-token',token);
                res.end();
        }

    }, function(error){
        console.log('Login e senha inválidos');
        res.sendStatus(401);

    });



    };


    api.verificaToken = function(req, res, next){

        var token = req.headers['x-access-token'];

        if(token){
            console.log('Verificando token...');
            jwt.verify(token, app.get('secret'), function(err, decoded){
    
                if(err){
                    console.log('token rejeitado');
                    res.sendStatus(401);
                }
                req.usuario = decoded;
                next();
    
    
            });
        }else{
            console.log('token não enviado');
            res.sendStatus(401);
        }


    };

    return api;


};