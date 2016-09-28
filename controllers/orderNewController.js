app.controller("orderNewCtrl", ["$scope", "shoppingCartService", "orderService", function($scope, shoppingCartService, orderService) {

  $scope.cart = shoppingCartService.listAll();

  $scope.order = {shippingAddress:{}, billingAddress:{}, creditCard:{} };

  $scope.createOrder = function() {
    $scope.order['cart'] = $scope.cart
    orderService.createOrder($scope.order);
    $scope.order = {shippingAddress:{}, billingAddress:{}, creditCard:{} };
    console.log($scope.order)
  }

  $scope.orders = orderService.getOrders();
}])