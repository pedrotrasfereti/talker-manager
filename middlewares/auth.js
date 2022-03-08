// Status Codes
const HTTP_UNAUTHORIZED = 401;

// Response Messages
const messages = {
  tokenNotFound: { message: 'Token não encontrado' },
  invalidToken: { message: 'Token inválido' },
};

const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(HTTP_UNAUTHORIZED)
      .json(messages.tokenNotFound);
  }

  if (authorization.length !== 16) {
    return res
      .status(HTTP_UNAUTHORIZED)
      .json(messages.invalidToken);
  }

  next();
};

module.exports = { auth };
