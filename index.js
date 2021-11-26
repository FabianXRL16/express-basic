const express = require('express');
const getApi = require('./routes');

const app = express();

const port = 3000;

getApi(app);

app.get('/', (req, res) => {
  res.send('Hi server');
});

app.listen(port, () => {
  console.log('Mi puerto es: ' + port);
});
