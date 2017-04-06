var periodicTable = angular.module("periodicTableOfElements");

periodicTable.factory('elementsFactory', function($http) {
    var factory = {};

    factory.getItems = function () {
        return  $http.get('app/components/periodic-table/factories/periodic-table.json');
    };

    return factory;
});
