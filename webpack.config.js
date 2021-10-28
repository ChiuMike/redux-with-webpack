const path=require('path');
const htmlwebpackPlugin=require('html-webpack-plugin');
module.exports={
    mode: 'development',
    entry:['@babel/polyfill','./index.jsx'],
    output:{
        filename: 'bundle.js',
        path:path.join(__dirname,'./dist')
    },
    module:{
        rules: [
            //第一個編譯 jsx
            {test: /\.jsx$/,exclude:/node_modules/,
            use:{loader:'babel-loader',options:{presets:['@babel/preset-react','@babel/preset-env']}}},
             //第二個loader編譯ES6
            {test: /\.js$/,exclude:/node_modules/,
            use:{loader:'babel-loader',options:{presets:['@babel/preset-env']}}},
            //編譯 CSS
            {test: /\.css$/,use:['style-loader','css-loader']}
        ]
    },
    plugins:[
        new htmlwebpackPlugin({
            template:'./index.html'
        })
    ]
}