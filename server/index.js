import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = process.env.PORT || 3005;
const app = express();

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('Something went wrong:', err);
      return res.status(500).send('Something went wrong!');
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`));
  });
});

app.use(express.static('./build'));

console.log(PORT);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
