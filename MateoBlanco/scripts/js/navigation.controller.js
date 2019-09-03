(function(){
    var app = angular.module('RegistroAcademico',[]);
    var routes = app.config(function($routeProvider){
        $routeProvider.when('/',{
            template:'User',
            url: '../pages/User.html'
        });
        $routeProvider.when('/horario',{
            template:'horario',
            url:'../pages/Horario.html'
        });
    });
    app.controller('navigationController',['$scope','$location',function($scope,$location){
        $scope.redirect = function(){
            
        }
    }]);
})();