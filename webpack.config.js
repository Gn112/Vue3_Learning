// dependências de desenvolvimento
const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = 
{
    entry:'./src/main.js',
    output:
    {
        path:__dirname,
        filename:'main.js'
    }
    
}