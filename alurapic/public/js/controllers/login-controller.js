angular.module('alurapic')
.controller('LoginController', function LoginController($scope, $http, $location) { 

    $scope.usuario = {};
    $scope.mensagem = '';

    $scope.autenticar = function(){
        var usuario =  $scope.usuario;
        console.log(usuario);
        $http.post('/autenticar',{login: usuario.login, senha: usuario.senha })
        .then(function(){
            $location.path('/');
        },function(error){
            console.log(error);
            $scope.usuario = {};
            $scope.mensagem = 'Login ou senha invalidos';
        });
    };

});