const path = require('path');

const main = (name, minimize) => ({
    entry: './src/index.ts',
    mode: "production",
    optimization: {
        minimize,
        usedExports: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        globalObject: "dApp",
        filename: name,
        path: path.resolve(__dirname, 'dist'),
    }
});

module.exports = [
    {
        ...main('dApp.js', false),
        devtool: 'inline-source-map',
        mode: "production",
    },
    {
        ...main('dApp.min.js', true)
    }
];



