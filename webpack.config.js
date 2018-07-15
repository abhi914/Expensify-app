const Path = require('path') ;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    console.log('env',env);
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }                        
                    ]
                }) 
                    
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: Path.resolve(__dirname,'public'),
            historyApiFallback: true
        }

    }
};


