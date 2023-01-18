const isNameEmpty = (name) => {
  if (!name) {
    return true;
  }
  return false;
};

const validateName = (name) => {
  if (name.length >= 3 && typeof name === 'string') {
    return true;
  }
  return false;
};

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if (isNameEmpty(name)) {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
  if (!validateName(name)) { 
      return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' }); 
    }
  next();
};

module.exports = {
  nameValidation,
};