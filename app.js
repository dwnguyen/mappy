
/**
 * Module dependencies.
 */
var index = require('./routes/index');
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var fs = require('fs');
var index = require('./routes/index');
var restaurants = require('./routes/restaurants');
var shops = require('./routes/shops');
var rest = require('./routes/rest');
var map = require('./routes/map');
var login = require('./routes/login')
// Example route
// var user = require('./routes/user');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/restaurants', restaurants.view);
app.get('/restaurants/:startNodes/:endNodes', restaurants.view);
app.get('/shops', shops.view);
app.get('/shops/:startNodes/:endNodes', shops.view);
app.get('/rest', rest.view);
app.get('/rest/:startNodes/:endNodes', rest.view);
app.get('/login', login.view);
// Example route
// app.get('/users', user.list);
app.get('/map/:startNodes/:endNodes', map.view);
app.get('/map/:startNodes', map.view);
app.get('/map', map.view);
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
