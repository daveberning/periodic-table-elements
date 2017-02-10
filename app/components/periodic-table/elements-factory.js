var periodicTable = angular.module("periodicTableOfElements");

periodicTable.factory('webtest', function($q, $timeout, $http) {
    var Webtest = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('periodic-table.json').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    };

    return Webtest;
});
