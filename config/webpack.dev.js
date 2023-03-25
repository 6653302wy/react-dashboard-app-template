const DotenvWebpackPlugin = require('dotenv-webpack');
const { WebpackConfiguration } = require('webpack-dev-server');
const { resolve } = require('./utils/resolve');
const { generate } = require('./webpack.base');

const base = generate(false);
const basePlugins = base.plugins;

/**
 * @type {WebpackConfiguration}
 */
const config = {
    ...base,
    devServer: {
        static: {
            directory: resolve('dist'),
        },
        compress: true,
        open: true,
        hot: true,
        historyApiFallback: true,
        port: 'auto',
        // host: 'local-ipv4', //关闭此选项，则是使用localhost
        // 设置http请求代理
        // proxy: {
        //     '/test-api': {
        //         target: 'https://api.test.cn/test-api',
        //         pathRewrite: { '^/test-api': '' },
        //         changeOrigin: true,
        //     },
        // },
    },
    plugins: [...basePlugins, new DotenvWebpackPlugin({ path: resolve('.env') })],
};

module.exports = config;
