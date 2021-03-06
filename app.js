
/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  scrape = require('./routes/scrape'),
  http = require('http'),
  path = require('path');

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3037);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/api/test', scrape.test);
app.post('/api/scrape', scrape.scrape);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
