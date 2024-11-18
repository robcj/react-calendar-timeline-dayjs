import react from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
// import { singleQuote } from './prettier.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
console.error(__dirname);

export default [
  eslintConfigPrettier,
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'prettier',
    'plugin:prettier/recommended'
    // 'prettier/react'
  ),
  {
    plugins: {
      react,
      jest,
      prettier,
      importPlugin,
    },
    files: ['**/*.js', '**/*.jsx'],
    ignores: ['node_modules/**'], // Exclude node_modules
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        requireConfigFile: false, // Do not require a Babel config file
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...jest.environments.globals.globals,
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      'react/jsx-uses-react': 2,
      'react/jsx-uses-vars': 2,
      'react/no-unused-prop-types': 2,
      'react/react-in-jsx-scope': 2,
      'no-labels': 0,
      'arrow-body-style': 1,
      'no-console': 1,
      semi: ['error', 'always'],
      quotes: ['error', 'single'], // Ensure this matches Prettier configuration
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      // Enforce Prettier rules,
      'prettier/prettier': [
        'error',
        {
          semi: true, // Ensure semicolons are enforced by Prettier
        },
      ],
      'import/order': 'warn',
      'import/prefer-default-export': 0,
      'import/no-extraneous-dependencies': 0,
      'import/no-unresolved': 0,
      'import/extensions': 0,
      'prettier/prettier': 'warn',
    },
  },
];
