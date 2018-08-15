const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// host static files from public folder
app.use(express.static('public'));

// a simple endpoint to receive data from a POST request
app.post('/data', (req, res) => {
  console.log(req.body);

  res.send(
    'Got a POST request. Check the terminal to check the data received.',
  );
});

app.listen(3001, () => console.log('Server listening on port 3001'));
