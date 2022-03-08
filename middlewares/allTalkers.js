// Utils
const { getTalkers } = require('../utils');

// Status Codes
const HTTP_OK_STATUS = 200;

const allTalkers = async (_req, res) => {
  const talkers = await getTalkers();

  if (talkers === '') {
    res
      .status(HTTP_OK_STATUS)
      .json([]);
  }

  res
    .status(HTTP_OK_STATUS)
    .json(talkers);
};

module.exports = { allTalkers };
