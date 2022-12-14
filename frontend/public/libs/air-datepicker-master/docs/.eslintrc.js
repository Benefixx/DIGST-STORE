let tabSize = 4,
    warnId = 2;

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    globals: {
        module: 'readonly',
        process: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: ['error', tabSize,  {ignoredNodes: ['TemplateLiteral']}], // игнорируем string template из-за ошибки в пакетах
        quotes: ['error', 'single'],
        semi: ['warn', 'always'],
        curly: ['error', 'multi-line'],
        'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
        'no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                argsIgnorePattern: '^e$',
                varsIgnorePattern: '^_$',
            },
        ],
        'max-len': ['error', {code: 120, ignoreStrings: true}],
        'object-curly-spacing': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'comma-style': ['error', 'last'],
        'comma-spacing': ['error', {'before': false, 'after': true}],
        'space-infix-ops': 'error',
        'space-in-parens': ['error', 'never'],
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'keyword-spacing': 'error',
        'arrow-spacing': 'error',
        'space-before-blocks': 'error',
        'no-magic-numbers': ['warn', {
            ignore: [0, 1, -1],
            ignoreArrayIndexes: true,
            ignoreDefaultValues: true,
        }],
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-no-target-blank': 'off',
        'react/prop-types': [warnId, {ignore: ['children']}],
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        react: {
            version: '17.01',
        },
    },
};
