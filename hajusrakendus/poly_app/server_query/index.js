const express = require('express');
const cors = require('cors');

const PORT = 5002;

const app = express()
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }))

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
})

app.post('/events', (req, res) => {

  if (req.body.type === 'PostCreated') {
    const { id, title } = req.body.data;
    posts[id] = { id, title, comments: [] }
  }

  if (req.body.type === 'CommentCreated') {
    const { id, content, postId } = req.body.data;
    const post = posts[postId];
    post.comments.push({ id, content })
  }

  console.log(posts);
  res.json({ })
})

app.listen(PORT, () => {
  console.log(`Server is runnig on http://localhost:${PORT}`)
})
