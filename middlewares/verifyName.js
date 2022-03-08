// Status Codes
const HTTP_BAD_REQUEST = 400;

// Regex
const nameRegex = /^.{3,}$/;

// Response Messages
const messages = {
  nameRequired: {
    message: 'O campo "name" é obrigatório',
  },
  badName: {
    message: 'O "name" deve ter pelo menos 3 caracteres',
  },
};

const verifyName = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(HTTP_BAD_REQUEST).json(messages.nameRequired);
  }

  if (!nameRegex.test(name)) {
    return res.status(HTTP_BAD_REQUEST).json(messages.badName);
  }

  next();
};

module.exports = { verifyName };
