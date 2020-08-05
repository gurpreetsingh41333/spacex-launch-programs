import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';

import Routes from './Routes';

export default (req, context) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <>{renderRoutes(Routes)}</>
    </StaticRouter>,
  );
  const helmet = Helmet.renderStatic();

  return `<!DOCTYPE html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/bundle.js"></script>
            </body>
    </html>`;
};
