const express = require('express');
const { randomBytes } = require('node:crypto');
const cors = require('cors');

const app = express();

const PORT = 5000;
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const posts = [];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const title = req.body.title;
  const post = {
    id: randomBytes(4).toString('hex'),
    title
  };
  posts.push(post);
  res.status(201).json({
    post: post
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
