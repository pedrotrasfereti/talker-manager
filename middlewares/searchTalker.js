const { getTalkers } = require('../utils');

// Status Codes
const HTTP_OK_STATUS = 200;

const searchTalker = async (req, res) => {
  const { q: searchTerm } = req.query;

  const talkers = await getTalkers();

  const filteredTalkers = talkers.filter((talker) => (
    talker.name.includes(searchTerm)
  ));

  res
    .status(HTTP_OK_STATUS)
    .json(filteredTalkers);
};

module.exports = { searchTalker };
