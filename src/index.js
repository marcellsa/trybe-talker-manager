const express = require('express');
const crypto = require('crypto'); // fonte: nodejs.org/api/cryto.html

const { readFile, writeFile } = require('./utilities/fsUtilities');

const { emailValidation } = require('./middlewares/emailValidation');
const { passwordValidation } = require('./middlewares/passwordValidation');
const { tokenValidation } = require('./middlewares/tokenValidation');
const { nameValidation } = require('./middlewares/nameValidation');
const { ageValidation } = require('./middlewares/ageValidation');
const { talkValidation } = require('./middlewares/talkValidation');
const { watchedAtValidation } = require('./middlewares/watchedAtValidation');
const { rateValidation } = require('./middlewares/rateValidation');

const PATH = './src/talker.json';

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const talkers = await readFile(PATH);
  return res.status(200).json(talkers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readFile(PATH);
  const talker = talkers.find((talkerData) => talkerData.id === Number(id));
  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(talker);
});

app.post('/login', emailValidation, passwordValidation, async (_req, res) => {
  const token = await crypto.randomBytes(8).toString('hex');
  return res.status(200).json({ token: `${token}` });
});

app.post('/talker', tokenValidation, nameValidation, ageValidation, 
  talkValidation, watchedAtValidation, rateValidation, async (req, res) => {
  const dataReq = req.body;
  const database = await readFile(PATH);
  const newTalker = { id: database.length + 1, ...dataReq };
  database.push(newTalker);
  const newDatabase = JSON.stringify(database);
  await writeFile(PATH, newDatabase);
  return res.status(201).json(newTalker);
});

app.listen(PORT, () => {
  console.log('Online');
});
