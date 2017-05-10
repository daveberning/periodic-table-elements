var periodicTable = angular.module("periodicTableOfElements", ['ngRoute']);

periodicTable.config(function ($routeProvider, $sceDelegateProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/components/periodic-table/index.html',
        controller: 'tableController'
    });

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. **.
        'https://en.wikipedia.org/**'
    ]);
});
