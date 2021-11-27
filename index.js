const express = require('express');
const getApi = require('./routes');

const { createdError, formatError } = require('./middleware/error.handler');

const app = express();

const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hi server');
});

getApi(app);

app.use(createdError);
app.use(formatError);

app.listen(port, () => {
  console.log('My port: ' + port);
});
