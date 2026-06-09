const express = require('express');
const cors = require('cors');
const musicasRoutes = require('./routes/musicas');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/musicas', musicasRoutes);

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});
