const isWatchedAtEmpty = (watchedAt) => {
  if (!watchedAt) {
    return true;
  }
  return false;
};

const validateWatchedAt = (watchedAt) => /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/g.test(watchedAt);

const watchedAtValidation = (req, res, next) => {
  const { talk } = req.body;
  if (isWatchedAtEmpty(talk.watchedAt)) {
      return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
  if (!validateWatchedAt(talk.watchedAt)) { 
      return res.status(400).json(
        { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
      ); 
    }
  next();
};

module.exports = {
  watchedAtValidation,
};