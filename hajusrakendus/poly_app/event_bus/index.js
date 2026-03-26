const express = require('express');

const PORT = 5005;

const app = express()
app.use(express.json());

app.post('/events', (req, res) => {
  const event = req.body;
  console.log('Received event: ', event.type);

  res.json({  status: 'OK'})
})

app.listen(PORT, () => {
  console.log(`Server is runnig on http://localhost:${PORT}`)
})
