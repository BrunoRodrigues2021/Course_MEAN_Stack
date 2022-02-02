const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'fa123131', title: 'First post', content: 'This is content 1'},
    { id: '45353453', title: 'Second post', content: 'This is content 2'},
    { id: '66656656', title: 'Third post', content: 'This is content 3'},
  ];
  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  });
});


module.exports = app;
