module.exports = {
    ignore: [
        "node_modules"
    ],
    presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
        "minify"
    ],
    plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/proposal-class-properties",
        [
            "module-resolver",
            {
                "root": ["./packages/"],
                "alias": {
                    "@project/components": "components/dist"
                }
            }
        ]
    ]
};
