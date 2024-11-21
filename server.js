const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<p>Sebastian Perez</p><p>Otro Nombre</p><p>Hernan Ledesma</p>');
});

app.listen(port, () => {
  console.log(`Server running at <http://localhost>:${port}/`);
});