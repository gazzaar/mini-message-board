const express = require('express');
const indexRouter = require('./routes/index.js');
const app = express();

app.get('/', indexRouter).listen(3000);
