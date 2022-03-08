// Status Codes
const HTTP_BAD_REQUEST = 400;

// Regex
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
const rateRegex = /^[1-5]$/;

// Response Messages
const messages = {
  talkRequired: {
    message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
  },
  badWatchedAt: {
    message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  },
  badRate: {
    message: 'O campo "rate" deve ser um inteiro de 1 à 5',
  },
};

const verifyProperties = (obj) => (
  !obj || !obj.watchedAt || obj.rate === undefined
);

const verifyTalk = async (req, res, next) => {
  const { talk } = req.body;

  if (verifyProperties(talk)) {
    return res.status(HTTP_BAD_REQUEST).json(messages.talkRequired);
  }

  if (!dateRegex.test(talk.watchedAt)) {
    return res.status(HTTP_BAD_REQUEST).json(messages.badWatchedAt);
  }

  if (!rateRegex.test(talk.rate)) {
    return res.status(HTTP_BAD_REQUEST).json(messages.badRate);
  }

  next();
};

module.exports = { verifyTalk };
