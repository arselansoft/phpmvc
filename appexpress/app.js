//This is file modified on 10-12-2019

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/',function(req, res){
  // res.send('Arselantronik Web');
  //res.sendFile(__dirname + '/public/index.html');
  res.render('index');
});

app.get('/contact', function(req, res){
//  res.send('Contact Us - Arselantronik');
  // res.sendFile(__dirname + '/public/contact.html');
//  console.log(req.query);
  res.render('contact',{qs: req.query});
});

app.post('/contact',  urlencodedParser, function(req, res){
//  res.send('Contact Us - Arselantronik');
  // res.sendFile(__dirname + '/public/contact.html');
//  console.log(req.query);
  res.render('contact',{qs: req.query});
});

//link to product
app.get('/product', function(req, res){
//  res.send('Contact Us - Arselantronik');
  // res.sendFile(__dirname + '/public/contact.html');
  res.render('product');
});

//link to profile - id
app.get('/profile/:id', function(req,res){
  var msg01 = '';
  if (req.params.id == 'pernikasri') {
    var data = {category: 'Fashion Company', yearfr: '2012', products: ['t-shirt', 'martial art', 'blouse']};
    msg01 = '<h2>You are not allowed to enter</h2>';
  } else if (req.params.id == 'arselansoft') {
    var data = {category: 'Electronic Company', yearfr: '2015', products: ['module', 'sensor', 'spare part']};
    msg01 = 'Arselansoft is allowed to enter ';
  } else {
    var data = {category: 'Unknown', yearfr: ' ', products: []};
    msg01 = 'Unknown user';
  }
  //res.send('Your request id is = ' + req.params.id);
//  res.send(msg01);
  res.render('profile', {person: req.params.id, data: data});
});

//listen the port
app.listen(3000);
