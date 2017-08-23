var db = require('../models');


function index(req, res) {
  db.GroceryItem.find({}, function(err, groceryItems){
    if (err) {
      console.log('Error getting groceryItems', err);
    }
    res.json(groceryItems);
  });
}

function show(req, res) {
  var id = req.params.groceryItemId;
  db.GroceryItem.findById(id, function(err, foundItem){
    if (err) {
      console.log('Error finding item', err);
    }
    res.json(foundItem)
  });
}

function create(req, res) {
  db.GroceryItem.create(req.body, function(err, groceryItem) {
    if (err) {
      console.log('Create error', err);
    }
    res.json(groceryItem);
  });
}

function destroy(req, res) {
  var id = req.params.groceryItemId;
  db.GroceryItem.findOneAndRemove({ _id: id }, function(err, groceryItem) {
    if (err) {
      console.log('Destroy error', err);
    }
    res.json(groceryItem);
  });
}

function update(req, res) {
  var id = req.params.groceryItemId;
  db.GroceryItem.findById(id, function(err, groceryItem) {
    if (err) {
      console.log('Update error', err);
    }

    groceryItem.name = req.body.name;
    groceryItem.expirationDate = req.body.expirationDate;
    groceryItem.section = req.body.section;

    groceryItem.save(function(err, savedGroceryItem) {
      if (err) {
        console.log(err, savedGroceryItem);
      }
        res.json(savedGroceryItem);
    });
  });
}

module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy,
  update: update
};
