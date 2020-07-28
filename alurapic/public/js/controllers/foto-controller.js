angular.module('alurapic').controller('FotoController',function($scope,recursoFoto, cadastroDeFotos, $routeParams){

$scope.foto = {};
$scope.mensagem = '';


if($routeParams.fotoId){
	recursoFoto.get({fotoId :  $routeParams.fotoId}, function(foto){
		$scope.foto = foto;
	},function(erro){
		$scope.mensagem = 'Não foi possível obter a foto com o ID' + $routeParams.fotoId;
	});
}

$scope.submeter = function (){
	
	if($scope.formulario.$valid){

			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(dados){
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao) $scope.foto =  {};
				//$scope.focado = true;
				
			})
			.catch(function(dados){
				$scope.mensagem =  dados.mensagem;
			});	
	}
};


});