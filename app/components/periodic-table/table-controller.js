var periodicTable = angular.module("periodicTableOfElements");

periodicTable.controller("HelloController", function($scope) {
    $scope.subject = "science";
});

periodicTable.controller('webtest', function($scope, webtest) {
    webtest.fetch().then(function(data) {
        $scope.data = data;
    })
});
