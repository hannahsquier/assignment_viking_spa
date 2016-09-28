app.controller("orderShowCtrl", ["$scope", 'orderService', '$stateParams', function($scope, orderService, $stateParams) {
  $scope.orders = orderService.getOrders();
  $scope.order = $scope.order[$stateParams.id]
}])