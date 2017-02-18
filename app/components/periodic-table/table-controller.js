var periodicTable = angular.module("periodicTableOfElements");

periodicTable.controller('elementNamesController', function($scope, elementsFactory) {
    elementsFactory.getItems().then(function(response){
        $scope.items = response.data;
        var tableLength = $scope.items.table.length;
        var actinoidsLength = $scope.items.actinoids.length;
        var lanthanoidsLength = $scope.items.lanthanoids.length;
        var elementNames = [];
        var electronShell = []

        $scope.elementNames = elementNames;
        $scope.electronShell = electronShell;
        $scope.neutronArray = [];
        $scope.elementIndex = 0;
        $scope.quarkIndex = 1;


        for (var i = 0; i < tableLength; i++) { // get elements in tables
            var elementLength = $scope.items.table[i].elements.length;

            for (a = 0; a < elementLength; a++) { // get element names
                var elementName = $scope.items.table[i].elements[a];
                //var shellLength = elementName.electrons.length;
                $scope.elementName = elementName;
                elementNames.push(elementName);

                // for (e = 0; e < shellLength; e++) {
                //     electronShell.push(elementName.electrons[e]);
                //     console.log(elementName.name + " " + elementName.electrons[e]);
                // }
                console.log(elementName.electrons);
                console.log(elementName.name + " " + elementName.electrons);

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
            $scope.roundedAtomicWeight = Math.round(elementNames[i].molar);
            $scope.atomicNumber = elementNames[i].number;
            $scope.neutronsInAtom = $scope.roundedAtomicWeight - $scope.atomicNumber;
            $scope.neutronArray.push($scope.neutronsInAtom);
        }

        $scope.next = function () {
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

        $scope.previous = function () {
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

        $scope.numberOfPages = elementNames.length;
        $scope.number = $scope.quarkIndex;
        $scope.getNumber = function(num) {
            return new Array(num);
        }

        //console.log($scope.elementNames);
    });
});
