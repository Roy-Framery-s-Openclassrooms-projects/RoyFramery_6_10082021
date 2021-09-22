const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

let EslintConfig = (env) => {
    const dev = env.dev === "dev";
    // console.log(dev)
    let config = {
        mode: "production",
        entry: {
            polyfill: "babel-polyfill",
            app: "./src/index.js",
            photographer: "./photographers/index.js"
        },
        output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, "dist")
        },
        devtool: 'source-map',
        watch: dev,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                }
            ]
        },
        optimization: {
            minimize: true,
            minimizer: [],
        },
        plugins: [new ESLintPlugin()],
    };
    if (!dev) {
        let minimizer = config.optimization.minimizer;
        minimizer.push(new TerserPlugin())
    }
    return config;
};


module.exports = EslintConfig;