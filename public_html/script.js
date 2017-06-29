/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myapp',['ngRoute']); //creating a module nd registering with the html ng-app directive in a html element
  //app config for routing  
app.config(function($routeProvider){
  $routeProvider.when('/',{
     template:'This is my home page'
}).when('/Profile',{
     templateUrl:'Profile.html'
 }).when('/Users',{ 
     templateUrl:'Users.html',
     controller:'userController'
 }).when('/Users/:id',{
      templateUrl:'userDetails.html',
      controller:'userDetailsController'
 }).otherwise({
     redirectTo:'/'
 });
 });
app.controller('userController', ['$scope','$rootScope',function($scope,$rootScope){
        $rootScope.user_arr = [
            {"username":"SAI","org":"Marlabs"},
            {"username":"Daljeet","org":"SweetHeart"},
            {"username":"Karthik","org":"NWMSU"}
          ];
   }]
);
app.controller('userDetailsController',['$scope','$rootScope','$location','$routeParams',function($scope,$rootScope,$location,$routeParams){
    $scope.user_details = $rootScope.user_arr[$routeParams.id];
    $scope.goBack = function(){
        $location.path("/Users");
    };
}]);

