module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jasmine: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        indent: ['WARN', 4],
        'class-methods-use-this': 'off',
        'array-callback-return': ['OFF', { allowImplicit: true }],
        'consistent-return': ['OFF', { treatUndefinedAsUnspecified: true }],
    },
};
