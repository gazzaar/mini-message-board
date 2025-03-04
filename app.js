const express = require('express');
const indexRouter = require('./routes/index.js');
const path = require('node:path');
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter).listen(3000);
