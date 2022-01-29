import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  entry: './source/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            // save url, например, ссылки на фоновые картинки - не изменяет их url
            options: {
              url: false,
            },
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};

export default config;
