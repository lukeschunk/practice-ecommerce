myApp.service('mainService', function ($q, $http) {
  
    
    
 this.getProducts = function () {
        console.log("2");
        return $http.get('/products')
            .then(function (response) {
            console.log("4");
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


var counter = getCounter();

function getCounter() {
    var myCounter = 0;
    
    return function() {
        myCounter += 2;
        return myCounter;
    }
    
}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
//test


