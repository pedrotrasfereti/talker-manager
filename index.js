const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

/*
  Agradeço o repositório do Leonardo Santos [lcds90] pela inspiração
  na organização dos diretórios e na re-exportação dos módulos!

  https://github.com/tryber/sd-014-c-project-talker-manager/pull/17/
*/

// Express Middlewares
const {
  allTalkers,
  talkerById,
  login,
  createTalker,
  editTalker,
  deleteTalker,
  searchTalker,
  auth,
  verifyName,
  verifyAge,
  verifyTalk,
} = require('./middlewares');

app.get(
  '/talker/search',
  [
    auth,
    searchTalker,
  ],
);

app.get('/talker', allTalkers);

app.get('/talker/:id', talkerById);

app.post('/login', login);

app.post(
  '/talker',
  [
    auth,
    verifyName,
    verifyAge,
    verifyTalk,
    createTalker,
  ],
);

app.put(
  '/talker/:id',
  [
    auth,
    verifyName,
    verifyAge,
    verifyTalk,
    editTalker,
  ],
);

app.delete(
  '/talker/:id',
  [
    auth,
    deleteTalker,
  ],
);
