const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, options) => {
  console.log(env, options)
  return {
    resolve: {
      extensions: ['.js', '.ts', '.scss', '.css'],
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    },
    entry: './src/index',
    output: {
      // path: '',
      // filename: '',
      publicPath: '/',
      clean: true
    },
		devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
				{
					test: /\.ts$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}
      ]
    },
    plugins: [
      new HtmlPlugin({
        template: './src/index.html'
      }),
      new CopyPlugin({
        patterns: [
          { from: 'static' }
        ]
      })
    ],
    // devServer: {
    //   port: 8080,
    //   open: true,
    //   historyApiFallback: true
    // }
  }
}
