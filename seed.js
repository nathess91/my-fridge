const db = require('./models');

const groceryItems = [
  {
    name: 'Milk',
    expirationDate: new Date().getTime() - 1000,
    section: 'Dairy',
  },
  {
    name: 'Orange Juice',
    expirationDate: new Date().getTime() + 29392,
    section: 'Other',
  },
  {
    name: 'Hummus',
    expirationDate: new Date().getTime() + 283,
    section: 'Produce',
  },
  {
    name: 'Steak',
    expirationDate: new Date().getTime() + 5000,
    section: 'Meat',
  },
  {
    name: 'Eggs',
    expirationDate: new Date().getTime() + 288399,
    section: 'Dairy',
  },
];

db.GroceryItem.remove({}, (err) => {
  db.GroceryItem.create(groceryItems, (createErr, seededItems) => {
    if (err) {
      return console.log('ERROR', err);
    }
    console.log('all items:', seededItems);
    console.log('created', seededItems.length, 'items');
  });
});
