var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = Schema({
    name: { type: String, unique: true },
    Price: Number
    
    
});

module.exports = mongoose.model('Product', Product);