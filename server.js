var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  multer = require('multer'),
  path = require('path');

var app = express();

mongoose.connect('mongodb://localhost/carshop_database');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db is open');
});

var Car = new mongoose.Schema({
  model: String,
  mark: String
});

var CarModel = mongoose.model('Car', Car);

// configurations server
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-
app.use(express.static(__dirname));

require('./source/api/cars')(app, CarModel);

app.listen(3000, function() {

});
