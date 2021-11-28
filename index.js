const express = require('express');
const getApi = require('./routes');

const {
  createdError,
  formatError,
  formatErrorBoom,
} = require('./middleware/error.handler');

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hi server');
});

getApi(app);

app.use(createdError);
app.use(formatErrorBoom);
app.use(formatError);

app.listen(port, () => {
  console.log('My port: ' + port);
});
