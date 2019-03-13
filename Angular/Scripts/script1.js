///// <reference path=""https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js" />
var myApp=angular.module("myModule",[]).controller("myController",function($scope)
{
    var employees=[
        {firstname:"daivid",lastname:"hasting",gender:"male"},
        {firstname:"daivid",lastname:"hasting",gender:"male",},
        {firstname:"daivid",lastname:"hasting",gender:"male"},
        {firstname:"daivid",lastname:"hasting",gender:"male"}
        ];


    $scope.employees=employees;
});




