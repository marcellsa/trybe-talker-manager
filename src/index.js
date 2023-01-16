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

app.listen(PORT, () => {
  console.log('Online');
});
