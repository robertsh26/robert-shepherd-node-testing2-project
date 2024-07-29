module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true, // Add Jest environment
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'airbnb',
      'prettier',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  };
  