/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 2/23/21
 * Time: 3:48 PM
 */
const path = require('path')
const resolve = function(dir){
    return path.resolve(__dirname, dir)
}
const compressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css' , 'png', 'jpeg', 'jpg']


module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('/src'))
            .set('@hooks', resolve('/src/hooks'))
            .set('@style', resolve('/src/style'))
            .set('@comps', resolve('/src/components'))

        config.plugin('html').tap(res => {
            res[0].title = 'vue3 魔板'
            return res
        })
    },
    configureWebpack: config => {
        config.plugins.push(new compressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            })
        )

        config.performance = {
            "maxEntrypointSize": 10000000,
            "maxAssetSize": 30000000
        }
    },

    // css:{
    //     // 定义全局sass变量
    //     loaderOptions:{
    //         sass: {
    //             prependData: `@import "@/assets/style/global.scss";`
    //         }
    //     }
    // },
    devServer: {
        host: "0.0.0.0",
        port: 1024,
        https: false,
        open: true
    }
}
