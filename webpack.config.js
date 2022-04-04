const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  output: {
    publicPath: "/",
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      // {
      //   test: /\.(css|scss)$/,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: "asset",
      },
    ],
  },
  // resolve: {
  //   extensions: [".js", ".jsx"],
  //   alias: {
  //     "@components": path.resolve(__dirname, "src/components"),
  //     "@containers": path.resolve(__dirname, "src/containers"),
  //     "@pages": path.resolve(__dirname, "src/pages"),
  //     "@hooks": path.resolve(__dirname, "src/hooks"),
  //     "@styles": path.resolve(__dirname, "src/styles"),
  //     '@icons': path.resolve(__dirname, 'public/assets/icons'),
  //     "@context": path.resolve(__dirname, "src/context"),
  //     "@utils": path.resolve(__dirname, "src/utils"),
  //   },
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new WebpackPwaManifestPlugin({
      name: "Petgram - Tu app social de mascotas",
      short_name: "Petgram 🦊",
      description:
        "Con Petgram puedes encontrar y subir fotos de animales domésticos.",
      background_color: "#ffffff",
      theme_color: "#2196f3",
      orientation: "portrait",
      display: "standalone",
      start_url: "/",
      scope: "/",
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve("public/assets/logo.png"),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
        {
          src: path.resolve("public/assets/logo.png"),
          size: "1024x1024", // you can also use the specifications pattern
        },
        {
          src: path.resolve("public/assets/logo.png"),
          size: "1024x1024",
          purpose: "maskable",
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: "service-worker.js",
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://(res.cloudinary.com|images.unsplash.com)"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          urlPattern: new RegExp("https://petgram-server-daxter.vercel.app"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    compress: true,
  },
  mode: "development",
  devtool: "source-map",
};
