const isPasswordEmpty = (password) => {
  if (!password) {
    return true;
  }
  return false;
};

const validatePassword = (password) => {
  if (password.length >= 6) {
    return true;
  }
  return false;
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  if (isPasswordEmpty(password)) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
  if (!validatePassword(password)) { 
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
    }  
  next();
};

module.exports = {
  passwordValidation,
};