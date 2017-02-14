var periodicTable = angular.module("periodicTableOfElements");

periodicTable.controller('elementNamesController', function($scope, elementsFactory){
    elementsFactory.getItems().then(function(response){
        $scope.items = response.data;
        var tableLength = $scope.items.table.length;
        var actinoidsLength = $scope.items.actinoids.length;
        var lanthanoidsLength = $scope.items.lanthanoids.length;
        var elementNames = [];

        $scope.itemsPerPage = 5;
        $scope.currentPage = 0;
        $scope.elementNames = elementNames;
        console.log($scope.items.table);

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

        console.log(elementNames);
    });
});
