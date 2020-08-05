angular.module('alurapic', ['minhasDiretivas','ngAnimate','ngRoute','meusServicos']).config(function($routeProvider, $locationProvider, $httpProvider){
    
   // $locationProvider.html5Mode(true);

   $httpProvider.interceptors.push('tokenInterceptor');

    $routeProvider.when('/fotos',{
        templateUrl:'partials/principal.html',
        controller: 'FotosController'
    }); 

    $routeProvider.when('/fotos/new',{
        templateUrl:'partials/fotos.html', 
        controller: 'FotoController'
    });

    $routeProvider.when('/fotos/edit/:fotoId',{
        templateUrl:'partials/fotos.html', 
        controller: 'FotoController'
    });

    $routeProvider.when('/login',{
        templateUrl:'partials/login.html', 
        controller: 'LoginController'
    });
    
    
    $routeProvider.otherwise({redirectTo: '/fotos'});

});