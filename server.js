'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var controllers = require('./controllers');
var app = express();
var router = express.Router();
var port = process.env.API_PORT || 3001;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//////////////////////
//JSON API Endpoints//
/////////////////////

//API CONTROLLER
app.get('/api', controllers.api.index);

//GROCERYITEM CONTROLLERS
app.get('/api/groceryItems', controllers.groceryItems.index);
app.get('/api/groceryItems/:groceryItemId', controllers.groceryItems.show);
app.post('/api/groceryItems', controllers.groceryItems.create);
app.delete('/api/groceryItems/:groceryItemId', controllers.groceryItems.destroy);
app.put('/api/groceryItems/:groceryItemId', controllers.groceryItems.update);

//start server
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
