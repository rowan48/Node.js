/*
* app.js is my entry point
* first we initiate the server @index,js
* then we will specify the routes
* second define which db will be used which will be mongodb here & the driver used is mongoose
* */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();

var runnerRouter = require('./routes/mazeroutes');
var indexRouter = require('./routes/index');//handle home page
// var mazeRouter = require('./routes/maze');
var mongoose =require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



/*connecting to db*/
mongoose.connect('mongodb://localhost/mazerunner',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(express.json());//parsing data from body as json object

app.use(express.static(path.join(__dirname, 'public')));


indexRouter(app);
runnerRouter(app);
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
