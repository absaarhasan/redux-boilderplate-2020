import path from 'path';
import Express from 'express';
import React from 'react';
import { ChunkExtractor } from '@loadable/server';
import { Provider } from 'react-redux';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Nav from 'Components/nav';
import Alert from 'Components/alert';
import Loader from 'Components/loader';
import { Global } from '@emotion/core';
import Pages from './pages';
import initStore from './store';
import style from './style';

const app = Express();
const port = 8081;
app.use('/dist', Express.static('dist'));
app.use(handleRender);

const nodeStatsFile = path.resolve('./dist/stats.server.json');
const webStatsFile = path.resolve('./dist/stats.client.json');
const nodeExtractor = new ChunkExtractor({ statsFile: nodeStatsFile, entrypoints: ['app'] });
const webExtractor = new ChunkExtractor({ statsFile: webStatsFile, entrypoints: ['app'] });
const history = createMemoryHistory();
const store = initStore(history);
const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

function handleRender(req, res) {
  const context = {};
  const jsx = nodeExtractor.collectChunks(
    <>
      <Provider store={store}>
        <Global styles={style} />
        <Router location={req.url} context={context}>
          <Nav />
          <Alert />
          <Pages />
          <Loader />
        </Router>
      </Provider>
    </>,
  );

  // TODO: PUT BACK IF NEC ==> <script src="/dist/app.web.js" defer></script>
  res.write(`
  <!doctype html>
    <html>
      <head>
        <title>Proto</title>
       
      </head>
    <body>
    <div id="root">`);
  const stream = renderToNodeStream(jsx);
  stream.pipe(res, { end: false });
  stream.on('end', () => res.end(`
    </div>
    

    <script id="PRELOADED_STATE">
      window.PRELOADED_STATE = ${preloadedState};
    </script>
    ${webExtractor.getScriptTags()}
  </body>
</html>`));
}

app.listen(port);
console.log(`Node server running on port ${port}`);
