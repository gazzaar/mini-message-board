const express = require('express');
const { router: indexRouter } = require('./routes/index.js');
const path = require('node:path');
const newMessageRouter = require('./routes/new.js');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/new', newMessageRouter);
app.listen(3000);
