const express = require('express');
const { router: indexRouter } = require('./routes/index.js');
const path = require('node:path');
const app = express();
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));
const newMessageRouter = require('./routes/new.js');
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/new', newMessageRouter);
app.listen(3000);
