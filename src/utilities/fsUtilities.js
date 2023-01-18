const fs = require('fs');

const readFile = async (path) => {
  try {
    return JSON.parse(fs.readFileSync(path));
  } catch (error) {
    return [];
  }
};

const writeFile = async (path, data) => {
  try {
    return fs.writeFileSync(path, data);
  } catch (error) {
    return ({ message: error.message });
  }
};

module.exports = {
  readFile,
  writeFile,
};