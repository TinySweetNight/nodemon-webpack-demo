const path = require('path');

module.exports = {
    entry:'./hosted/client.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'hosted'),
        filenmae: 'bundle.js'
    }
}