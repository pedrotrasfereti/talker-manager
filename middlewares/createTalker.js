const { getTalkers, updateTalkers } = require('../utils');

// Status Codes
const HTTP_CREATED = 201;

const createTalker = async (req, res) => {
  const { name, age, talk } = req.body;

  const prev = await getTalkers();
  const id = prev.length + 1;
  const newTalker = { id, name, age, talk };

  await updateTalkers([...prev, newTalker]);

  res
    .status(HTTP_CREATED)
    .json(newTalker);
};

module.exports = { createTalker };
