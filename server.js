const fs = require('fs');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const ReactDOMServer = require('react-dom/server');
// const App = require('./src/App');

const app = express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);
const port = process.env.PORT || 3000;

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.get('/', (req, res) => {
    // const app = ReactDOMServer.renderToString(<App />)
    // const indexFile = path.resolve('./static/index.html');
    // console.log('|||', app);
    //
    // fs.readFile(indexFile, 'utf8', (err, data) => {
    //     if (err) {
    //         console.error('Something went wrong:', err);
    //         return res.status(500).send('Oops, better luck next time!');
    //     }
    //
    //     return res.send(
    //         data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    //     );
    // })
})

app.use(express.static('./static'));

app.listen(port, function () {
    console.log('Example app listening on port 3000!\n');
});