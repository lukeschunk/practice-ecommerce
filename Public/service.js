myApp.service('mainService', function ($q, $http) {
    
 this.getProducts = function () {

        return $http.get('/products')
            .then(function (response) {
                return response;
            });
    };

    
    
    
    

    this.getProductById = function (id) {

        return $http.get('/products/' + id)
            .then(function (response) {

                console.log(response);
                return response;
            }, function (error) {

                console.log(error);
                return "sorry, there is nobody by that id";
            });
    };


//    this.postNewFriend = function (friend) {
//
//        return $http.post('/api/friends', friend)
//            .then(function (response) {
//
//                console.log(response);
//                return "friend added!";
//            }, function (error) {
//                console.log(error);
//                return error;
//            });
//    };


})