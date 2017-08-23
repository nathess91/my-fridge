var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GroceryItemSchema = new Schema({
  name: String,
  expirationDate: Date,
  section: String,
});

var GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema);

module.exports = GroceryItem;
