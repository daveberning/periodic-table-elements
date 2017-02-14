var periodicTable = angular.module("periodicTableOfElements");

periodicTable.controller("subjectController", function($scope, elementsFactory) {
    $scope.subject = "science";
});

periodicTable.controller('elementNames', function($scope, elementsFactory){
    elementsFactory.getItems().then(function(response){
        $scope.items = response.data;
        var tableLength = $scope.items.table.length;
        console.log($scope.items.table);

        for (var i = 0; i < tableLength; i++) { // get elements in tables
            var elementLength = $scope.items.table[i].elements.length;

            for (a = 0; a < elementLength; a++) { // get element names
                var elementName = $scope.items.table[i].elements[a].name;
                $scope.elementName = elementName;
                console.log(elementName);
            }
        }
    });
});
