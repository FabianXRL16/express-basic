const express = require('express');
const getApi = require('./routes');

const app = express();

const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hi server');
});

getApi(app);

app.listen(port, () => {
  console.log('My port: ' + port);
});
