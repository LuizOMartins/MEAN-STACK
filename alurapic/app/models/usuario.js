
var mongoose =  require('mongoose');

var shcema =  mongoose.Schema({

    login: {
        type:  String,
        required: true,

    },
    senha: {
        type: String,
        required: true
     }
});

mongoose.model('Usuario', shcema);