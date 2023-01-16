const express = require('express');
// const fs = require('fs');
const { readTalkersData } = require('./utilities/fsUtilities');

// const talkersPath = `${__dirname}/talker.json`;

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  // const data = fs.readFileSync(talkersPath);
  // const talkers = await JSON.parse(data);
  // if (!talkers) {
  //   return [];
  // }
  const talkers = await readTalkersData();
  return res.status(200).send(talkers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readTalkersData();
  const talker = talkers.find((talkerData) => talkerData.id === Number(id));
  if (!talker) {
    return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).send(talker);
});

app.listen(PORT, () => {
  console.log('Online');
});
