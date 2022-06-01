module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: false,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    globals: {
        GLOBALS: 'readonly',
    },
    overrides: [
        {
            env: {
                browser: false,
                es2021: true,
                node: true,
            },
            files: ['./*.js', 'script/**/*.js'],
        },
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        camelcase: 'warn',
        'comma-dangle': ['warn', 'always-multiline'],
        curly: 'error',
        eqeqeq: ['error', 'always'],
        indent: ['error', 4],
        'generator-star-spacing': [
            'warn',
            {
                before: false,
                after: true,
            },
        ],
        'linebreak-style': ['error', 'unix'],
        'multiline-ternary': 'warn',
        'operator-linebreak': ['warn', 'before'],
        semi: ['warn', 'always'],
        'space-before-function-paren': ['warn', 'never'],
    },
};
