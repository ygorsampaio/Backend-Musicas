# Músicas API

Backend para o app de músicas descobertas. Feito com Node.js e Express.

## Como rodar

```bash
npm install
npm run dev
```

O servidor vai rodar em `http://localhost:3333`

## Rotas

| Método | Rota           | O que faz              |
|--------|----------------|------------------------|
| GET    | /musicas       | Lista todas as músicas |
| GET    | /musicas/:id   | Busca uma música       |
| POST   | /musicas       | Cadastra nova música   |
| PUT    | /musicas/:id   | Edita uma música       |
| DELETE | /musicas/:id   | Deleta uma música      |

## Exemplo de body (POST/PUT)

```json
{
  "titulo": "Bohemian Rhapsody",
  "artista": "Queen",
  "genero": "Rock",
  "nota": 5
}
```
