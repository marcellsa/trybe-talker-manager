const isTalkEmpty = (talk) => {
  if (!talk) {
    return true;
  }
  return false;
};

const talkValidation = (req, res, next) => {
  const { talk } = req.body;
  if (isTalkEmpty(talk)) {
      return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }
  next();
};

module.exports = {
  talkValidation,
};