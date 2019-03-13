///// <reference path=""https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js" />
var myApp=angular.module("myModule",[]).controller("myController",function($scope)
{
    var countries=[
                {
                    name:"UK",
                    clubs:[{name:"man city"},{name:"man united"}, {name:"chealsea"}]
                },
                
                {
                    name:"IND",
                   clubs:[{name:"pune fc"},{name:"kashmir fc"}, {name:"bangloru fc"}]
                }
                ];


    $scope.countries=countries;
});




