const fs = require('fs');

const readFile = async (path) => {
  try {
    return JSON.parse(fs.readFileSync(path));
  } catch (error) {
    return [];
  }
};

module.exports = {
  readFile,
};