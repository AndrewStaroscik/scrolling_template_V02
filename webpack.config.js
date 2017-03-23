/* copied from http://survivejs.com/webpack/developing-with-webpack/getting-started/ and subsequent changes on 8/15/2016 */
/* Modifined to be a scrolling animation template 12.12.2016 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./libs/parts');


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const jsBundle = 'scrollTmpl.v2.00.js';
const cssBundle = 'scrollTmpl.v2.00.css';


const common = {

  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: jsBundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Scroll Template v2',
      template: './app/indexTMPL.ejs'
    })
  ]
};


var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      {
        devtool: 'source-map'
      },
      parts.babelLoader(PATHS.app),
      parts.minify(),
      parts.extractCSS(PATHS.app, cssBundle)
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.babelLoader(PATHS.app),
      parts.setupCSS(PATHS.app),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
}

module.exports = config;
/*module.exports = validate(config); - turned this off to make postcss/stylus/autoprefixer work */
  