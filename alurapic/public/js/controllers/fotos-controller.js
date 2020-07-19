angular.module('alurapic').controller('FotosController',function($scope, recursoFoto){
  
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';


      recursoFoto.query(function(foto){
         $scope.fotos = foto;
      }, function(erro){
         console.log(erro);
      });

   /*  $http.get('v1/fotos').success(function(fotos){
        $scope.fotos = fotos;
     }).error(function(erro){
        console.log(erro);
     });
   */


     $scope.remover = function(foto){
        
      recursoFoto.delete({fotoId : foto._id}, function(){
         var indiceFoto = $scope.fotos.indexOf(foto);
         $scope.fotos.splice(indiceFoto,1);
         
         console.log('Foto Removida com sucesso');
         $scope.mensagem = 'Foto removida com sucesso.';
      },function(erro){
         console.log('Não foi possível remover a foto');
         $scope.mensagem = 'Não foi possível remover a foto: '+foto.titulo;

      });
      


     };



    /*
    promise.then(function(retorno){
       $scope.fotos = retorno.data; 
    }).catch(function(error){
        console.log(error)
    });
    */

});