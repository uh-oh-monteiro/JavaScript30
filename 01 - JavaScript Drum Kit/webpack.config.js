const path = require('path');

module.exports = {
    entry: './index.ts', // The name and location of your TS file to be comiled
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js', // Output file
        path: path.resolve(__dirname, 'dist'), // Output directory: in total ./dist/bundle.js which sould be the scricpt src
    },
};
