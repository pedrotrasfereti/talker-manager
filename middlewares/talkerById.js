// Utils
const { getTalkerById } = require('../utils');

// Status Codes
const HTTP_NOT_FOUND = 404;
const HTTP_OK_STATUS = 200;

// Response Messages
const messages = {
  talkerNotFound: {
    message: 'Pessoa palestrante não encontrada',
  },
};

const talkerById = async (req, res) => {
  const { id } = req.params;

  const talker = await getTalkerById(id);

  if (talker === undefined) {
    res
      .status(HTTP_NOT_FOUND)
      .json(messages.talkerNotFound);
  }

  res
    .status(HTTP_OK_STATUS)
    .json(talker);
};

module.exports = { talkerById };
