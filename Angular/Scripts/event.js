var myApp=angular.module("myModule",[]).controller("myController",function($scope)
{
    var technologies=
    [
        {name:"C#",like:0,dislike:0},
        {name:"C++",like:0,dislike:0},
        {name:"java",like:0,dislike:0},
        {name:"python",like:0,dislike:0},
    ];
    $scope.technologies=technologies;
    $scope.incrementlikes=function(technologies)
    {
        technologies.like++;
    }
        $scope.incrementdislikes=function(technologies)
    {
        technologies.dislike++;
    }
});
