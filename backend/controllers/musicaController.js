const Musica = require('../models/musicaModel');

function listar(req, res) {
  const musicas = Musica.listarTodas();
  res.json(musicas);
}

function buscar(req, res) {
  const musica = Musica.buscarPorId(req.params.id);
  if (!musica) {
    return res.status(404).json({ erro: 'Música não encontrada' });
  }
  res.json(musica);
}

function criar(req, res) {
  const { titulo, artista, genero, nota } = req.body;

  if (!titulo || !artista) {
    return res.status(400).json({ erro: 'Título e artista são obrigatórios' });
  }

  const novaMusica = Musica.criar(titulo, artista, genero, nota);
  res.status(201).json(novaMusica);
}

function atualizar(req, res) {
  const { titulo, artista, genero, nota } = req.body;

  const musicaAtualizada = Musica.atualizar(req.params.id, titulo, artista, genero, nota);
  if (!musicaAtualizada) {
    return res.status(404).json({ erro: 'Música não encontrada' });
  }

  res.json(musicaAtualizada);
}

function deletar(req, res) {
  const deletou = Musica.deletar(req.params.id);
  if (!deletou) {
    return res.status(404).json({ erro: 'Música não encontrada' });
  }
  res.json({ mensagem: 'Música deletada com sucesso' });
}

module.exports = { listar, buscar, criar, atualizar, deletar };
