"use strict"

module.exports = {
  devtool: 'eval',
  entry: [
    './node_modules/browserstack-tape-reporter/index.js',
    './test-bs.js'
  ],
  output: {
    path: __dirname,
    filename: 'test-bs.bundle.js'
  },
  node: {
    fs: 'empty'
  }
}
