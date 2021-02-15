const fs = require('fs');

const getPage = (req, res, path) => {
  const pageIndex = fs.readFileSync(`${__dirname}/../client/${path}`);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(pageIndex);
  res.end();
};

module.exports.getPage = getPage;
