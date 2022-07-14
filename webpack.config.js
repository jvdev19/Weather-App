const path = require('path'); // 3
const HtmlWebpackPlugin = require('html-webpack-plugin');// 7


module.exports = { // 1
    entry: './src/app/index.js', // 2
    stats: { children: true },
    output: {
        path: path.join(__dirname, 'dist'),  // >> 3
        filename: 'bundle.js'
    },
    devServer: {// 4
        port:3000
    },
    module: { // 5
        rules: [
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader'] // 6
            }
        ]
    },
    plugins:[// 7
        new HtmlWebpackPlugin({
                template: './src/index.html'
            }
        )
    ]
}