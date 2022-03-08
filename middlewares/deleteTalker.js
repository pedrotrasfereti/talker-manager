const { getTalkers, updateTalkers } = require('../utils');

// Status Codes
const HTTP_NO_CONTENT = 204;

const deleteTalker = async (req, res) => {
  const { id } = req.params;

  const talkers = await getTalkers();

  const updatedTalkers = talkers.filter((t) => (
    t.id !== parseInt(id, 0)
  ));

  await updateTalkers(updatedTalkers);

  res
    .status(HTTP_NO_CONTENT)
    .end();
};

module.exports = { deleteTalker };
