var periodicTable = angular.module("periodicTableOfElements");

periodicTable.controller('tableController', function($scope, elementsFactory) {
    elementsFactory.getItems().then(function(response){
        $scope.items = response.data;
        var elementsArr = []; // every element

        // Loop through JSON. Add to elements array
        for (var t = 0; t < $scope.items.table.length; t++) {
            for (var e = 0; e < $scope.items.table[t].elements.length; e++) {
                elementsArr.push($scope.items.table[t].elements[e]);
            }
        }

        for (var a = 0; a < $scope.items.actinoids.length; a++) {
            elementsArr.push($scope.items.actinoids[a]);
        }

        for (var l = 0; l < $scope.items.lanthanoids.length; l++) {
            elementsArr.push($scope.items.lanthanoids[l]);
        }

        // Defining scope
        $scope.elements = elementsArr;
        $scope.elementIndex = 0;

        console.log($scope.elements[5].electrons);

        // Navigation
        $scope.previous = function () {
            if ($scope.elementIndex >= $scope.elements) {
                $scope.elementIndex = 0;
            } else {
                $scope.elementIndex--;
            }
        };

        $scope.next = function () {
            if ($scope.elementIndex >= $scope.elements) {
                $scope.elementIndex = 0;
            } else {
                $scope.elementIndex++;
            }
        };
    });
});
