let musicas = [];
let proximoId = 1;

function listarTodas() {
  return musicas;
}

function buscarPorId(id) {
  return musicas.find((m) => m.id === parseInt(id));
}

function criar(titulo, artista, genero, nota) {
  const novaMusica = {
    id: proximoId++,
    titulo,
    artista,
    genero,
    nota,
  };
  musicas.push(novaMusica);
  return novaMusica;
}

function atualizar(id, titulo, artista, genero, nota) {
  const musica = buscarPorId(id);
  if (!musica) return null;

  musica.titulo = titulo;
  musica.artista = artista;
  musica.genero = genero;
  musica.nota = nota;

  return musica;
}

function deletar(id) {
  const index = musicas.findIndex((m) => m.id === parseInt(id));
  if (index === -1) return false;

  musicas.splice(index, 1);
  return true;
}

module.exports = { listarTodas, buscarPorId, criar, atualizar, deletar };
