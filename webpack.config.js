const Path = require('path') ;

module.exports = {
    entry:  './src/app.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname,'public')
    },
    module : {
        rules: [{
            loader: 'babel-loader',
            // include : Path.join(__dirname,'src'),
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
              
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: Path.resolve(__dirname,'public'),
        historyApiFallback: true
    }
};

