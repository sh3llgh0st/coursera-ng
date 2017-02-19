/**
 *
 * @authors Ben Van Aken (ben.vanaken@gmail.com)
 * @date    2017-02-19 12:24:25
 * @version $Id$
 */

(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
        $scope.outputMsg = "";
        $scope.inputMsg = "";

        console.log($scope.inputMsg);
        console.log($scope.outputMsg);

        $scope.CheckLunch = function() {



            if ($scope.inputMsg == "") {
                $scope.outputMsg = "Please enter data first";
            } else {
                var size = $scope.inputMsg.split(',').length;
                console.log("The size is: " + size);
                if (size > 3) {
                    $scope.outputMsg = "Too Much!";
                } else {
                    $scope.outputMsg = "Enjoy!";
                };
            };
          };
    };


})();
