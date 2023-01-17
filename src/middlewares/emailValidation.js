const isEmailEmpty = (email) => {
  if (!email) {
    return true;
  }
  return false;
};

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  if (isEmailEmpty(email)) {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
  if (!validateEmail(email)) { 
      return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' }); 
    }
  next();
};

module.exports = {
  emailValidation,
};