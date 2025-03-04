const { Router } = require('express');
const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Manga',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Fathy',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
  res.end();
});

module.exports = indexRouter;
