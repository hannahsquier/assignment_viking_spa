app.factory("orderService", ["_", function(_) {

  var _blankOrder = {shippingAddress:{}, billingAddress:{}, creditCard:{} };
  var _orders = {}
  var _orderCount = 0

  var createOrder = function(order) {
    order['id'] = _orderCount
    _orders[_orderCount] = order
  }

  var getOrders = function() {
    return _orders;
  }

  var getBlankOrder = function() {
    return _blankOrder;
  }

  return {
    createOrder: createOrder,
    getOrders: getOrders,
    getBlankOrder: getBlankOrder
  }
}]);