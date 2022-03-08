// Ler arquivos com o fs
const fs = require('fs').promises;

// Gerar token
const UIDGenerator = require('uid-generator');

const uidgen = new UIDGenerator();

const getTalkers = async () => {
  const content = await fs.readFile('./talker.json', 'utf-8');
  const json = JSON.parse(content);
  return json;
};

const getTalkerById = async (id) => {
  const talkers = await getTalkers();
  const talker = talkers.find((t) => t.id === parseInt(id, 0));
  return talker;
};

const updateTalkers = async (data) => {
  await fs.writeFile('./talker.json', JSON.stringify(data, null, 2));
};

const generateToken = async () => {
  const token = await uidgen.generate();
  return token.substring(0, 16);
};

module.exports = {
  getTalkers,
  getTalkerById,
  updateTalkers,
  generateToken,
};
