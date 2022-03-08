// Utils
const { generateToken } = require('../utils');

// Status Codes
const HTTP_OK_STATUS = 200;
const HTTP_BAD_REQUEST = 400;

// Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{6,}$/;

// Response Messages
const messages = {
  emailRequired: {
    message: 'O campo "email" é obrigatório',
  },
  badEmail: {
    message: 'O "email" deve ter o formato "email@email.com"',
  },
  passwordRequired: {
    message: 'O campo "password" é obrigatório',
  },
  badPassword: {
    message: 'O "password" deve ter pelo menos 6 caracteres',
  },
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await generateToken();

  if (!email) {
    res.status(HTTP_BAD_REQUEST).json(messages.emailRequired);
  } else if (!emailRegex.test(email)) {
    res
      .status(HTTP_BAD_REQUEST)
      .json(messages.badEmail);
  } else if (!password) {
    res
      .status(HTTP_BAD_REQUEST)
      .json(messages.passwordRequired);
  } else if (!passwordRegex.test(password)) {
    res
      .status(HTTP_BAD_REQUEST)
      .json(messages.badPassword);
  } else res.status(HTTP_OK_STATUS).json({ token });
};

module.exports = { login };
