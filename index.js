const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const list = [];
for (let i=0; i < 750000; i++) {
  list.push(uuidv4());
}
fs.writeFile('./output.txt', list.join('\n'), (err, result) => {});