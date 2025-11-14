const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Servidor con Express y texto plano.');
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});