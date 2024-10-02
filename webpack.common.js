const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve("./src/popup/popup.tsx"),
    options: path.resolve("./src/options/options.tsx"),
    background: path.resolve("./src/background/background.ts"),
    contentScript: path.resolve("./src/contentScript/index.ts")
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/
      },
      {
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")]
              }
            }
          }
        ],
        test: /\.css$/i
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist")
        }
      ]
    }),
    ...getHtmlPlugins(["popup", "options"])
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== "contentScript";
      }
    }
  }
};

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HTMLPlugin({
        title: "React extension",
        filename: `${chunk}.html`,
        chunks: [chunk]
      })
  );
}
