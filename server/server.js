import fs from 'fs';
import path from'path';
import express from'express';
import webpack from'webpack';
import webpackDevMiddleware from'webpack-dev-middleware';

import React from'react';
import ReactDOMServer from'react-dom/server';
import App from'../src/App';

const app = express();
import config from'../webpack.dev.js';
const compiler = webpack(config);
const port = process.env.PORT || 3000;

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.get('*', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
    const indexFile = path.resolve('./build/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    })
})

app.use(express.static('../static'));

app.listen(port, function () {
    console.log('Example app listening on port 3000!\n');
});