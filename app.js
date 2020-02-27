
/**
 * Module dependencies.
 */
var index = require('./routes/index');
var express = require('express');
var http = require('http');
var path = require('path');
var exphbs = require('express3-handlebars')
var fs = require('fs');
var index = require('./routes/index');
var map = require('./routes/map');
var directions = require('./routes/directions');
var stores = require('./routes/stores');
var login = require('./routes/login')
// Example route
// var user = require('./routes/user');
var app = express();
var hbs = exphbs.create({
  partialsDir: [
      'views/partials/'
  ]
});
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
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
app.get('/', index.viewB);
app.get('/A', index.viewA);
app.get('/B', index.viewB);
app.get('/directions/:startNodes/:endNodes', directions.view);
app.get('/stores/:storeType', stores.view);
app.get('/stores/:storeType/:startNodes/:endNodes', stores.view);
app.get('/stores/:storeType/:startNodes/:endNodes/:version', stores.view);
app.get('/directions/:startNodes/:endNodes/:version', directions.view);
app.get('/login', login.view);
// Example route
// app.get('/users', user.list);
app.get('/map/:startNodes/:endNodes', map.view);
app.get('/map/:startNodes/:endNodes/:version', map.view);
app.get('/map/:startNodes', map.view);
app.get('/map', map.view);
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
