const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    home: "./home.js",
    product: "./product.js",
    cart: "./cart.js",
    confirmation: "./confirmation.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};