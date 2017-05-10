var periodicTable = angular.module("periodicTableOfElements");

periodicTable.factory('elementsFactory', function($http) {
    var factory = {};

    factory.getItems = function () {
        return  $http.get('app/components/periodic-table/factories/periodic-table.json');
    };

    return factory;
});


periodicTable.factory('wikiService', function($http) {

    var wikiService = {
        get: function(element) {
            return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&titles=' + element.name + '&rawcontinue=true&action=query&format=json&prop=extracts');
        }
    };

    return wikiService;
});
