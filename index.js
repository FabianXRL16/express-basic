// import { playList } from './playList.js';

const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hi server');
});

app.get('/songs', (req, res) => {
  res.json({
    items:[
      {
        nameSong: 'Stan',
        singer: 'Eminen & Dido',
      },
      {
        nameSong: 'Empire State Of Mind',
        singer: 'JAY-Z, Alicia Keys',
      },
      {
        nameSong: 'Kangaroo Court',
        singer: 'Capital Cities',
      }
    ]
  });
});

// app.get('/playList', (req, res) => {
//   res.send(playList);
// });

app.listen(port, () => {
  console.log('Mi puerto es: ' + port);
});
