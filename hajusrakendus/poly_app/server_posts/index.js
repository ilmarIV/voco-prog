const express = require('express');
const { randomBytes } = require('node:crypto');
const cors = require('cors');
const axios = require('axios')

const app = express();

const PORT = 5000;
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const posts = [];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const title = req.body.title;
  const post = {
    id: id,
    title
  };
  posts.push(post);

  axios.post('http://localhost:5005/events', {
    type: 'PostCreated',
  }).catch((err) => {
    console.log('Error sending event to event bus: ', err.message);
  })

  res.status(201).json({
    post: post
  });
});

app.post('/events', (req, res) => {
  console.log('Received event: ', req.body);
  res.json({ })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
