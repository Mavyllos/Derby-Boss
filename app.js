/* eslint-disable max-params, no-console */


const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const favicon = require('serve-favicon');

app.disable('x-powered-by');

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(express.static(path.join('public')));

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    console.log(err);
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(JSON.stringify(err, null, 2));

  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.statusText);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
