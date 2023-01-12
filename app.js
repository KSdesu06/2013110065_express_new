var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyRouter = require('./routes/company')
const staffRouter = require('./routes/staff');
var shopRouter = require('./routes/shop');

var app = express();

mongoose.connect('mongodb+srv://superkat:0N6cauLZwThyGHXp@2013110065-kat.wponooi.mongodb.net/restfulapi?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', companyRouter);
app.use('/staff', staffRouter)
app.use('/shop', shopRouter)

module.exports = app;
