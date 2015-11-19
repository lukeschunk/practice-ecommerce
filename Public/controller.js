myApp.controller("myController", ["$scope", "mainService", function($scope, mainService){
    $scope.test = "test";
    
    $scope.getProducts = function() {
        mainService.getProducts()
            .then(function(response) {
            $scope.products = response.data;
        })
    }
    
    $scope.foo = {
        name: "testy",
        price: ""
    };
    
    $scope.getProducts();
    
    $scope.getProductById = function(id) {
        mainService.getProductById(id)
            .then(function(response) {
                
            $scope.foo = response.data[0];
                console.log($scope.foo);
                console.log('this is $scope.product', $scope.foo);
        })
    }
}]);
//arbitrary change