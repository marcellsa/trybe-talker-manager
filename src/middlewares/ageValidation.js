const isAgeAmpty = (age) => {
  if (!age) {
    return true;
  }
  return false;
};

const validateAge = (age) => (age >= 18);

const ageValidation = (req, res, next) => {
  const { age } = req.body;
  if (isAgeAmpty(age)) {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
  if (!validateAge(age)) { 
      return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' }); 
    }
  next();
};

module.exports = {
  ageValidation,
};