module.exports = {
    env: {
        es2020: true,
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, // Enable JSX parsing
        },
    },
    ignorePatterns: ['dist/**/*', 'coverage/**/*'],
    rules: {
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
    settings: {
        react: {
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
        },
    },
};
