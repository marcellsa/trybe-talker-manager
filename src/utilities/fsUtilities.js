const fs = require('fs').promises;
const path = require('path');

const readTalkersData = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
    const talkersData = JSON.parse(data);
    // console.log(talkers);
    return talkersData;
  } catch (error) {
    return [];
  }
};

module.exports = {
  readTalkersData,
};