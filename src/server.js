const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const pusher = new Pusher({
  appId: '939669',
  key: 'b8585128683247f88e99',
  secret: 'e834a19e4b211e5a3a10',
  cluster: 'ap1',
  encrypted: true
});
app.set('PORT', process.env.PORT || 5000);

app.post('/message', (req, res) => {
  const payload = req.body;
  pusher.trigger('chat', 'message', payload);
  res.send(payload);
});

app.listen(app.get('PORT'), () =>
  console.log(`Listening at ${app.get('PORT')}`));
