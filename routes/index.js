const { Router } = require('express');
const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Manga',
    added: new Date().toLocaleString(),
  },
  {
    text: 'Hello World!',
    user: 'Fathy',
    added: new Date().toLocaleString(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
  res.end();
});

module.exports = {
  router: indexRouter,
  messages,
  addMessage: (text, user) => {
    messages.push({
      text,
      user,
      added: new Date().toLocaleString(),
    });
  },
};

// Alternative Method 2 (using exports directly):
// exports.router = indexRouter;
// exports.messages = messages;
// exports.addMessage = (text, user) => {
//   messages.push({
//     text,
//     user,
//     added: new Date()
//   });
// };
