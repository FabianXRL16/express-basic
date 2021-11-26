// import { playList } from './playList.js';

const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hi server');
});

app.get('/songs', (req, res) => {
  res.json({
    items: [
      {
        id: 1,
        nameSong: 'Stan',
        singer: 'Eminen & Dido',
      },
      {
        id: 2,
        nameSong: 'Empire State Of Mind',
        singer: 'JAY-Z, Alicia Keys',
      },
      {
        id: 3,
        nameSong: 'Kangaroo Court',
        singer: 'Capital Cities',
      },
    ],
  });
});

app.get("/products/food", (req, res) => {
  res.send("Esta es un ruta especifica")
})

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: `product${id}`
  })
})

app.get("/users/:type", (req, res) => {
  const { type } = req.params;
  const { limit } = req.query;
  let size = limit || 10
  let array = []
  for (let i = 0; i < size; i++) {
    array.push({
      name: `user${i}`,
      type
    })
  }
  res.json(array)
})


app.get('/categories/:categoriesId/products/:productId', (req, res) => {
  const { categoriesId, productId } = req.params;
  res.json({
    categoriesId,
    productId,
  });
});


// app.get('/playList', (req, res) => {
//   res.send(playList);
// });

app.listen(port, () => {
  console.log('Mi puerto es: ' + port);
});
