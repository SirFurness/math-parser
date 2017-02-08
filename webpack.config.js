const path = require('path');

module.exports = {
    context: path.join(__dirname, "lib"),
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        libraryTarget: "commonjs2"
    }
}