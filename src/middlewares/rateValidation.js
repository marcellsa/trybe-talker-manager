const isRateEmpty = (rate) => {
  if (!rate) {
    return true;
  }
  return false;
};

const validateRate = (rate) => (Number.isInteger(rate) && rate > 0 && rate <= 5);

const rateValidation = (req, res, next) => {
  const { talk } = req.body;
  if (isRateEmpty(talk.rate)) {
      return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
  if (!validateRate(talk.rate)) { 
      return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' }); 
    }
  next();
};

module.exports = {
  rateValidation,
};