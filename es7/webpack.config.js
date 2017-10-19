const path = require('path')
const webpack = require('webpack')

module.exports = {
    // Definimos desde donde buscaremos los archivos a transformar
  context: __dirname,
    // Archivo de entrada desde donde se buscarán todas las dependecias del proyecto
  entry: {
    app: path.join(__dirname, 'index.js')
  },
    // Archivo de salida desde donde se executarán las funcionalidades
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: 'public'
  },
    // Esta configuración nos permite ver estructurados nuestros archivos en el navegador tal y como estamos programando
  devtool: 'eval-source-map',
    // El lugar donde se configura todas nuestas transformaciones de archivos
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
                // exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: [ 'es2015', 'es2016', 'es2017' ],
          plugins: [
						["transform-decorators-legacy"],
						["transform-function-bind"]
          ]
        }
      }
    ]
  },
    // Si probamos cosas en el navegador necesitariamos levantar un servidor con nuestros archivos estáticos, para ello usamos:
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },
    // Podemos utilizar plugins para varias tareas, en este caso minificar código
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
