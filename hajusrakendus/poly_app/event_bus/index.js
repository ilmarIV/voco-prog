const express = require('express');
const axios = require('axios');

const PORT = 5005;

const app = express()
app.use(express.json());

app.post('/events', (req, res) => {
  const event = req.body;
  console.log('Received event: ', event.type);

  axios.post('http://localhost:5000/events', event).catch(err => {
    console.log('Error forwarding to post service', err.message)
  })

  axios.post('http://localhost:5001/events', event).catch(err => {
    console.log('Error forwarding to comment service', err.message)
  })

  res.json({  status: 'OK'})
})

app.listen(PORT, () => {
  console.log(`Server is runnig on http://localhost:${PORT}`)
})
