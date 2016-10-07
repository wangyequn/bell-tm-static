var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const path = require("path");

module.exports = {
    entry: {
        'angular':               './src/angular.ts',
        'navbar':                './src/navbar/index.ts',
        'todo':                  './src/todo/todo.ts',
        'plan/settings/subject': './src/plan/settings/subject-director.ts',
        'plan/settings/program': './src/plan/settings/program-settings.ts',
        'plan/vision/list':      './src/plan/vision/public/list.ts',
        'plan/vision/item':      './src/plan/vision/public/item.ts',
        'plan/vision/draft':     './src/plan/vision/draft/draft.ts',
        'plan/vision/review':    './src/plan/vision/review/review.ts',
        'plan/scheme/list':      './src/plan/scheme/public/list.ts',
        'plan/scheme/item':      './src/plan/scheme/public/item.ts',
        'plan/scheme/draft':     './src/plan/scheme/draft/draft.ts',
        'plan/scheme/review':    './src/plan/scheme/review/review.ts',
        'card/reissue/admin':    './src/card/reissue/admin/admin.ts',
        'card/reissue/form':     './src/card/reissue/form/form.ts',
        'card/reissue/order':    './src/card/reissue/order/order.ts',
    },

    output: {
        path: path.join(__dirname, '/dist/dev'),
        filename: 'js/app/[name].js'
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.scss$/, loader: 'raw!sass' }
        ]
    },

    plugins: [
        new CommonsChunkPlugin({ name: 'angular', fileName: 'angular.js', minChunks: Infinity }),
        new CommonsChunkPlugin({ name: 'common', fileName: 'common.js', minChunk: 2 }),
        new CopyWebpackPlugin([
            { to: 'js/lib', from: './node_modules/moment/min/moment-with-locales.min.js' },
            { to: 'js/lib', from: './node_modules/markdown-it/dist/markdown-it.min.js' },
            { to: 'js/lib', from: './node_modules/jquery/dist/jquery.slim.min.js' },
            { to: 'js/lib', from: './node_modules/tether/dist/js/tether.min.js' },
            { to: 'js/lib', from: './node_modules/bootstrap/dist/js/bootstrap.min.js' },
            { to: 'css/lib', from: './node_modules/bootstrap/dist/css/bootstrap.min.css' },
            { to: 'js/lib', from: './node_modules/bootstrap-submenu/dist/js/bootstrap-submenu.min.js' },
            { to: 'css/lib', from: './node_modules/bootstrap-submenu/dist/css/bootstrap-submenu.min.css' },
            { to: 'js/lib', from: './node_modules/select2/dist/js/select2.min.js' },
            { to: 'css/lib', from: './node_modules/select2/dist/css/select2.min.css' },
            { to: 'css/lib', from: './node_modules/font-awesome/css/font-awesome.min.css' },
            { to: 'css/fonts', from: './node_modules/font-awesome/fonts' },
            { to: 'css/app', from: './src/main.css' },
            { to: 'images', from: './images/favicon.ico' }
        ]),
        /*
        new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        */
        new ForkCheckerPlugin(),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(__dirname, './src')
        ),
    ],

    resolve: {
        extensions: ['', '.js', '.ts', '.html', '.scss'],
        plugins: [
            new TsConfigPathsPlugin()
        ]
    },

    externals: [
        'moment',
        'markdown-it'
    ],

    devServer: {
        inline: true,
        colors: true,
        progress: true,
        displayErrorDetails: true,
        displayCached: true,
        port: 3000,
        contentBase: './src',
        historyApiFallback: true
    },

    node: {
        crypto: 'empty' // we need this for 'reflect-metadata' polyfill
    },

    tslint: {
        emitErrors: false,
        failOnHint: false,
        resourcePath: 'src'
    },
}
