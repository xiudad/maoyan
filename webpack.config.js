const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin")
const {CleanWebpackPlugin}=require("clean-webpack-plugin")
const VueLoaderPlugin=require('vue-loader/lib/plugin')
const PATH={
    app:path.join(__dirname,"./src/main.js"),
    bulid:path.join(__dirname,"./dist")
}
module.exports={
    entry:{
        app:PATH.app
    },
    output:{
        filename:"[name].js",
        path:PATH.bulid
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"index.html"
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    resolve:{
        extensions:[".vue",".js",".json",".css"],
        alias:{
            "@":path.join(__dirname,"./src/")
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.(js|jsx)$/,
                exclude:path.join(__dirname,"./node_modules/"),
                loader:"babel-loader"
            },
            {
                test:/\.(css|scss)$/,
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        limit:2048
                    }
                }
            },
            {
                test:/\.(svg|eot|ttf|woff|woff2)$/,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"iconfont/[name].[ext]"
                    }
                }
            }
        ]
    },
    devServer:{
        open:true,
        port:9000
    }
}