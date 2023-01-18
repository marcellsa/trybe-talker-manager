const isTokenEmpty = (authorization) => {
  if (!authorization) {
    return true;
  }
  return false;
};

const validateToken = (authorization) => {
  if (authorization.length >= 16 && typeof authorization === 'string') {
    return true;
  }
  return false;
};

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  if (isTokenEmpty(authorization)) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
  if (!validateToken(authorization)) { 
      return res.status(401).json({ message: 'Token inválido' }); 
    }
  next();
};

module.exports = {
  tokenValidation,
};