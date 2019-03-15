// var app = angular
//         .module("myModule", [])
//         .controller("myController", function ($scope)
//         {
//             $scope.transformString = function (input)
//              {
//                if (!input)
//                 return input;

//                     var output = "";

//                     for (var i = 0; i < input.length; i++) {
//                 if (i > 0 && input[i] == input[i].toUpperCase()) {
//                     output = output + " ";
//                 }

//                 output = output + input[i];
//             }
//                 $scope.output=output;
                
//             };
//         });



        var app = angular.module("myModule", []);

        app.controller("myController", function ($scope,stringService)
        {
           $scope.transformString = function (input)
           {
               $scope.output=stringService.processString(input);
           }
                
        
        });
        // var app = angular.module("myModule", []);
        app.controller("myController2",function($scope,$location,$anchorScroll)
        {
            $scope.scrollTo=function(scrollLocation)
            {
                 $location.hash(scrollLocation);
                             $anchorScroll.yOffset =100;
                             $anchorScroll();
            }
        });
        
        

        //Customservice created for reusablity;