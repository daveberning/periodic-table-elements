var periodicTable = angular.module("periodicTableOfElements");

periodicTable.directive('something', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                alert('yup');
            });
        }
    };
}]);

periodicTable.directive('myRepeatDirective', function() {
  return function(scope, element, attrs) {
      // jquery for atom
  };
})
