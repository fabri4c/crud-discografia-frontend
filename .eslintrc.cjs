module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint', 'react', 'react-refresh', 'prettier'],
  root: true,
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        parser: 'flow'
      }
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    '@typescript-eslint/default-param-last': 'warn',
    '@typescript-eslint/no-shadow': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 'warn',
    'default-param-last': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'off',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-console': 'warn',
    'no-duplicate-imports': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0
      }
    ],
    'no-nested-ternary': 'warn',
    radix: 0,
    'react/button-has-type': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/function-component-definition': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-unused-class-component-methods': 'warn',
    'react/no-unused-state': 'warn',
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'react/require-default-props': 'warn'
  }
};
