(function(){
    var app = angular.module('RegistroAcademico',['ngRoute']);
    app.controller('RegistroController',['$scope','$routeProvider','$location',function($scope,$routeProvider,$location){
        $scope.user = {
            codigo: 506151060,
            password:"h3lctcep0",
            nombre:"Mateo",
            apellido:"Blanco",
            semestre: 5
        };

        $scope.requested={
            codigo: "",
            password:"",
            nombre:"",
            apellido:"",
            semestre: ""
        }

        var acceso = function () {
            if ($scope.user.codigo == $scope.requested.codigo) {
                if ($scope.user.password == $scope.requested.password) {
                    $location.path = '/';
                    $routeProvider.when('/', { template: './pages/User.html' });
                }
            }
        }
    }]);
})();