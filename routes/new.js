const { Router } = require('express');
const newMessageRouter = Router();
const { addMessage } = require('./index');
newMessageRouter.get('/', (req, res) => {
  res.render('form');
  res.end();
});

newMessageRouter.post('/', (req, res) => {
  let messageText = req.body.newMessage;
  let authorName = req.body.authorName;
  addMessage(messageText, authorName);
  res.redirect('/');
  res.end();
});
module.exports = newMessageRouter;
