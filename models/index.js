var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/food_app");

var GroceryItem = require('./groceryItem');

module.exports.GroceryItem = GroceryItem;
