const { defineConfig } = require('eslint/config');
const cypress = require('eslint-plugin-cypress');
const globals = require('globals');

module.exports = defineConfig([
  {
    ignores: [
      'node_modules/**',
      'cypress/reports/**',
      'cypress/videos/**',
      'cypress/screenshots/**'
    ]
  },

  {
    files: ['cypress/**/*.js'],

    plugins: {
      cypress
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.mocha,
        cy: 'readonly',
        Cypress: 'readonly',
        expect: 'readonly'
      }
    },

    rules: {
      ...cypress.configs.recommended.rules,
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error'
    }
  },

  {
    files: ['cypress.config.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node
      }
    },

    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error'
    }
  }
]);