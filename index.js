var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
//
//var db = mongojs()
var app = express();


//MongoDB
var db = mongojs("ecom");
var products = db.collection("products");

//var cart = []; this isn't being used 

//_____________________________________________LOGGER_____________________________________________
var logger = function(req, res, next) {
  console.log('\n\n------------------------------\n------------------------------\n\n');
  console.log('\n___HEADERS___\n', req.headers);
  console.log('\n___BODY___\n', req.body);
  console.log('\n___SESSION___\n', req.session);
  next();
};


//_____________________________________________BodyParser & Session & Cors Middleware__________________________________________



var corsOptions = {
    origin: 'http://localhost:3000'
};



app.use(bodyParser.json());



//____________________________________________ENDPOINTS_____________________________________________

app.get('/products', function (req, res, next) {

    products.find(req.query.id, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});

app.get('/products/:id', function (req, res, next) {
    console.log(req.params);
    console.log(req.params.id);
    products.find({"_id": mongojs.ObjectId(req.params.id)}, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});



app.post('/products', function (req, res, next) {
    products.insert(req.body, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});


app.put('/products', function (req, res, next) {
    products.update({ "_id": mongojs.ObjectId(req.query.id) }, req.body, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});



app.delete('/products', function (req, res, next) {
    products.remove({ " _id": mongojs.ObjectId(req.query.id) }, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});



//__________________________________________STATIC_____________________________________________

app.use(express.static('./public'));

//__________________________________________LISTEN_____________________________________________

app.listen(3000, function() {
   console.log('listening to port 3000');
});