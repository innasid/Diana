module.exports = {
output: {
    path: path.join(__dirname, "/dist"),
    filename: 'index.bundle.js',
},
 devserver:{
    port: 3010,
    watchcontentBase: true,
 },

 module:{
    rules:[
        {
           test: /\.(js | jsx)$/,
           exclude: /node_modules/,
           use: {
            loader: 'babel-loader'
           }
        },
        {
            test: /\.(scss)$/,
            use:[
                "style-loader",
                "css-loader",
                "sass-loader"
            ],
        }
    ],
 },
};