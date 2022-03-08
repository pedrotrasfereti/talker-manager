const { getTalkers, updateTalkers } = require('../utils');

// Status Codes
const HTTP_OK_STATUS = 200;

const editTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const parsedId = parseInt(id, 0);

  const updatedTalker = { id: parsedId, name, age, talk };

  const prev = await getTalkers();

  const updatedTalkers = prev.map((talker) => {
    if (talker.id === parsedId) return updatedTalker;
    return talker;
  });

  await updateTalkers(updatedTalkers);

  res
    .status(HTTP_OK_STATUS)
    .json(updatedTalker);
};

module.exports = { editTalker };
