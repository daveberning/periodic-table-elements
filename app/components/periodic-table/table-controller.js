var periodicTable = angular.module("periodicTableOfElements");

periodicTable.controller('elementNamesController', function($scope, elementsFactory){
    elementsFactory.getItems().then(function(response){
        $scope.items = response.data;
        var tableLength = $scope.items.table.length;
        var actinoidsLength = $scope.items.actinoids.length;
        var lanthanoidsLength = $scope.items.lanthanoids.length;
        var elementNames = [];

        $scope.elementNames = elementNames;
        $scope.neutronArray = [];
        $scope.elementIndex = 0;
        $scope.quarkIndex = 1;

        for (var i = 0; i < tableLength; i++) { // get elements in tables
            var elementLength = $scope.items.table[i].elements.length;

            for (a = 0; a < elementLength; a++) { // get element names
                var elementName = $scope.items.table[i].elements[a];
                $scope.elementName = elementName;
                elementNames.push(elementName);
            }
        }

        for (var i = 0; i < actinoidsLength; i++) { // get elements in tables
            var elementName = $scope.items.actinoids[i];
            $scope.elementName = elementName;
            elementNames.push(elementName);
        }

        for (var i = 0; i < lanthanoidsLength; i++) { // get elements in tables
            var elementName = $scope.items.lanthanoids[i];
            $scope.elementName = elementName;
            elementNames.push(elementName);
        }

        for (var i = 0; i < elementNames.length; i++) { // looping through all elements
            $scope.atomicWeight = Math.round(elementNames[i].molar);
            $scope.atomicNumber = elementNames[i].number;
            $scope.neutronsInAtom = $scope.atomicWeight - $scope.atomicNumber;
            console.log($scope.neutronsInAtom);
        }

        $scope.numberOfPages = elementNames.length;

<<<<<<< HEAD
        for (var i = 0; i < elementNames.length; i++) { // looping through all elements
            $scope.roundedAtomicWeight = Math.round(elementNames[i].molar);
            $scope.atomicNumber = elementNames[i].number;
            $scope.neutronsInAtom = $scope.roundedAtomicWeight - $scope.atomicNumber;
            $scope.neutronArray.push($scope.neutronsInAtom);
        }

        $scope.next = function () {
=======
        $scope.next = function ($scope) {
>>>>>>> bcfe2349fa1643b3d3b5f7c1d2930f71f2cfe83a
            if ($scope.elementIndex >= $scope.numberOfPages - 1) {
                $scope.elementIndex = 0;
                $scope.quarkIndex = 1;
            } else {
                $scope.elementIndex++;
                $scope.quarkIndex++;

                $scope.number = $scope.quarkIndex;
                $scope.getNumber = function(num) {
                    return new Array(num);
                }
            }
            console.log(elementNames.length + '/' + $scope.elementIndex);
        };

        $scope.previous = function ($scope) {
            if ($scope.elementIndex >= $scope.numberOfPages - 1) {
                $scope.elementIndex = 0;
                $scope.quarkIndex = 1;
            } else {
                $scope.elementIndex--;
                $scope.quarkIndex--;

                $scope.number = $scope.quarkIndex;
                $scope.getNumber = function(num) {
                    return new Array(num);
                }
            }
            console.log(elementNames.length + '/' + $scope.elementIndex);
        };

        $scope.number = $scope.quarkIndex;
        $scope.getNumber = function(num) {
            return new Array(num);
        }

        console.log($scope.neutronArray);
    });
});
