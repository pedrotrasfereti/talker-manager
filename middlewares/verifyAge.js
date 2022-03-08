// Status Codes
const HTTP_BAD_REQUEST = 400;

// Response Messages
const messages = {
  ageRequired: {
    message: 'O campo "age" é obrigatório',
  },
  badAge: {
    message: 'A pessoa palestrante deve ser maior de idade',
  },
};

const verifyAge = async (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    return res.status(HTTP_BAD_REQUEST).json(messages.ageRequired);
  }

  if (parseInt(age, 0) < 18) {
    return res.status(HTTP_BAD_REQUEST).json(messages.badAge);
  }

  next();
};

module.exports = { verifyAge };
