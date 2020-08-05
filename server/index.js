import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import Routes from '../src/Routes';
import ServerRenderer from '../src/ServerRenderer';

const app = express();

const PORT = process.env.PORT || 3005;

app.use(express.static('build'));

app.get('*', (req, res) => {
  const routes = matchRoutes(Routes, req.path);
  const promises = routes
    .map(({ route }) => {
      return route.loadData ? route.loadData() : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise(resolve => {
          promise.then(resolve).catch(resolve);
        });
      }
      return null;
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = ServerRenderer(req, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${PORT}`);
});
