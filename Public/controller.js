myApp.controller("myController", ["$scope", "mainService", "$http", function ($scope, mainService, $http) {
    $scope.test = "MY PRODUCTS TO SELL";

    $scope.getProducts = function () {
        mainService.getProducts()
            .then(function (response) {
                $scope.products = response.data;
            })
    }

    $scope.foo = {
        name: "testy",
        price: ""
    };

    $scope.getProducts();

    $scope.getProductById = function (id) {
        mainService.getProductById(id)
            .then(function (response) {

                $scope.foo = response.data[0];
                console.log($scope.foo);
                console.log('this is $scope.product', $scope.foo);
            })
    };

    $scope.postProduct = function (product) {
        mainService.postNewProduct(product)
            .then(function (response) {
                $scope.products.push(response)
                $scope.getProducts();

            })
    };
    
    $scope.deleteAProduct = function( productById ) {
        console.log(productById)
        $http.delete('/products/' + productById)
            .then(function( response ) {
            $scope.getProducts();
        })
    }
    
//_____________________________________________ ATTEMPT TO LINK IT TO THE SERVICE _____________________________________________
//    $scope.deleteAProduct = function(productId) {
//        mainService.deleteAProduct(productId)
//            .then(function(response) {
//                $scope.getProducts();
//        })
//            
//    }
}]);