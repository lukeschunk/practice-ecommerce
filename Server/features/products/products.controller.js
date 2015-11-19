//app.get('/products', function (req, res, next) {
//
//    products.find(req.query.id, function (err, result) {
//        if (err) res.send(err);
//        else res.send(result);
//    })
//});

var Product = require('../models/Product');

module.exports = {
    
    getProducts: function( req, res ) {
        Product.find().then(function( response ) {
            console.log("this is response", response);
            res.send(response)
        });  
        
    },
    
    addProduct: function( req, res ) {
        new Product(req.body).save(function( err, newProduct ) {
            console.log("this is newProduct", newProduct)
            if(err) {
                res.status(500).send(err);
            } else {
                res.send(newProduct)
            }
        });
    },
    
    deleteProduct: function( req, res) {
        Product.findByIdAndRemove(req.params.id, function( err, productToDelete) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.send(productToDelete);
            }
        })
    }
    
}
//
//	addFood: function( req, res ) {
//		new Food(req.body).save(function( err, data ) {
//			if (err) {
//				res.status(500).send(err);
//			} else {
//				res.send(data);
//			}
//		});
//	},