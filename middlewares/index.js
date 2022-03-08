/*
  Agradeço o repositório do Leonardo Santos [lcds90] pela inspiração
  na organização dos diretórios e na re-exportação dos módulos!

  https://github.com/tryber/sd-014-c-project-talker-manager/pull/17/
*/

const { allTalkers } = require('./allTalkers');
const { talkerById } = require('./talkerById');
const { login } = require('./login');
const { createTalker } = require('./createTalker');
const { editTalker } = require('./editTalker');
const { deleteTalker } = require('./deleteTalker');
const { searchTalker } = require('./searchTalker');

const { auth } = require('./auth');
const { verifyName } = require('./verifyName');
const { verifyAge } = require('./verifyAge');
const { verifyTalk } = require('./verifyTalk');

module.exports = {
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
};
