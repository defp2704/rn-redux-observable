const path = require('path');
const rootDir = path.join(__dirname, '..');

module.exports = [
  {
    test: /\.(tsx|ts|jsx|js|mjs)$/,
    exclude: /node_modules/,
    loader: 'ts-loader',
  },
  {
    test: /\.(svg|png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          useRelativePath: false,
          name: '[sha512:hash:base62:5].[ext]',
          outputPath: 'img/',
          publicPath: '/',
        }
      },
    ],
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          useRelativePath: false,
          name: '[sha512:hash:base62:5].[ext]',
          limit: 8192,
          outputPath: 'img/',
          publicPath: '/',
        },
      },
    ],
  },
  // IconLoader
  {
    test: /\.ttf$/,
    use: {
      loader: 'url-loader',
      options: {
        useRelativePath: false,
        name: '[sha512:hash:base62:5].[ext]',
        limit: 4096,
        outputPath: 'font/',
        publicPath: '/',
      },
    },
    include: [
      path.resolve(rootDir, 'node_modules/react-native-vector-icons'),
    ],
  }
  // {
  //   enforce: 'pre',
  //   test: /\.js$/,
  //   loader: 'source-map-loader',
  // },
];
