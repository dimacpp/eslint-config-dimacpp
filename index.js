module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
  },
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'no-async-promise-executor': 'error',
    'no-cond-assign': [
      'error',
      'always',
    ],
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-func-assign': 'error',
    'no-invalid-regexp': 'error',
    'eqeqeq': 'error',
    'no-obj-calls': 'error',
    'use-isnan': 'error',
    'no-caller': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'valid-typeof': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-redeclare': [
      'error',
      {
        'builtinGlobals': false,
      },
    ],
    'no-self-compare': 'error',
    'no-delete-var': 'error',
    'no-undef': 'error',
    'no-use-before-define': [
      'error',
      {
        'functions': false,
        'classes': true,
        'variables': true,
      },
    ],
    'constructor-super': 'error',
    'no-const-assign': 'error',
    'no-this-before-super': 'error',
    'no-extra-semi': 'warn',
    'curly': [
      'warn',
      'multi-line',
    ],
    'dot-location': [
      'warn',
      'property',
    ],
    'no-else-return': 'warn',
    'no-extra-bind': 'warn',
    'no-implicit-coercion': [
      'warn',
      {
        'boolean': true,
        'number': true,
        'string': true,
      },
    ],
    'no-loop-func': 'warn',
    'no-multi-spaces': [
      'warn',
      {
        'ignoreEOLComments': true,
      },
    ],
    'no-new-wrappers': 'warn',
    'no-sequences': 'warn',
    'no-throw-literal': 'warn',
    'no-unused-expressions': 'warn',
    'no-useless-call': 'warn',
    'no-with': 'warn',
    'radix': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-shadow': 'warn',
    'no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'args': 'all',
        'argsIgnorePattern': '^_',
        'ignoreRestSiblings': false,
      },
    ],
    'callback-return': 'warn',
    'handle-callback-err': 'warn',
    'no-path-concat': 'warn',
    'brace-style': [
      'warn',
      '1tbs',
      {},
    ],
    'comma-spacing': [
      'warn',
      {
        'after': true,
      },
    ],
    'comma-style': [
      'warn',
      'last',
    ],
    'comma-dangle': [
      'warn',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'always-multiline',
      },
    ],
    'eol-last': 'warn',
    'indent': [
      'warn',
      2,
      {
        'SwitchCase': 1,
      },
    ],
    'key-spacing': [
      'warn',
      {
        'beforeColon': false,
        'afterColon': true,
      },
    ],
    'linebreak-style': [
      'warn',
      'unix',
    ],
    'new-cap': 'warn',
    'new-parens': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        'max': 2,
      },
    ],
    'no-new-object': 'warn',
    'no-trailing-spaces': 'warn',
    'object-curly-spacing': [
      'warn',
      'always',
      {},
    ],
    'one-var': [
      'warn',
      'never',
    ],
    'operator-linebreak': [
      'warn',
      'after',
    ],
    'quotes': [
      'warn',
      'single',
    ],
    'semi': [
      'warn',
      'always',
    ],
    'keyword-spacing': [
      'warn',
      {
        'before': true,
        'after': true,
      },
    ],
    'space-before-blocks': [
      'warn',
      'always',
    ],
    'arrow-parens': [
      'warn',
      'always',
    ],
    'arrow-spacing': [
      'warn',
      {
        'before': true,
        'after': true,
      },
    ],
    'no-var': 'warn',
    'class-methods-use-this': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'space-infix-ops': 'warn',
    'prefer-const': 'warn',
  }
};
