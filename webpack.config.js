module.exports = {
    entry: './core/liriliri.es6',
    output: {
        path: __dirname + '/src/engine',
        filename: 'liriliri.js',
        library: ['liriliri']
    },
    module: {
        loaders: [
            {
                test: /\.es6$/,
                loader: 'babel?presets[]=es2015'
            }
        ]
    }
};