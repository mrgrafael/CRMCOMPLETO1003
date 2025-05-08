const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../../logs/app.log');

exports.log = (message) => {
  const time = new Date().toISOString();
  fs.appendFileSync(logFile, `[${time}] ${message}\n`);
};
