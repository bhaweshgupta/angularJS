///// <reference path=""https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js" />
var myApp=angular.module("myModule",[]).controller("myController",function($scope)
{
    var employee={
        firstname:"daivid",
        lastname:"hasting",
        gender:"male",
        image:"images/1.jpg",
        greeting:"greeting msg"
    };
    $scope.employee=employee;
});




//method chaing 
// var myApp=angular
// .module("myModule",[])
// .controller("myController",fuction($scope)
// {
//     var employee={
//         firstname:"daivid",
//         lastname:"hasting",
//         gender:"male"
//    };
//     $scope.employee=employee;

// });