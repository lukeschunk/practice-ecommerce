myApp.service('mainService', function ($q, $http) {
    
 this.getProducts = function () {

        return $http.get('/products')
            .then(function (response) {
                return response;
            });
    };

this.postNewProduct = function(product) {
        return $http.post('/products', product)
            .then(function (response) {

                console.log(response);
                return "we just added a new product";
            }, function (error) {
                console.log(error);
                return error;
            });
    };
    
    
 //_____________________________________________ ATTEMPT TO RUN DELETE ON SERVICE _____________________________________________   
//this.deleteAProduct = function( productId ) {
//    $http.delete('/product/' + productId)
//        .then(function(response) {
//        console.log("hey it's sort of working");
//    })
//}    




})