const babelOptions = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ],
};

module.exports = require("babel-jest").createTransformer(babelOptions)