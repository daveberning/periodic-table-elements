var periodicTable = angular.module("periodicTableOfElements", ['ngRoute']);

periodicTable.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/components/periodic-table/index.html',
        controller: 'tableController'
    });
});
