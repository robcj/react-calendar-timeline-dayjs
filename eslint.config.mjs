import react from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { singleQuote } from './prettier.config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended'
    // "prettier",
    // 'plugin:prettier/recommended'
    // "prettier/react",
  ),
  {
    plugins: {
      react,
      jest,
      prettier,
    },
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
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

    rules: {
      // 'prettier/prettier': 'error', // Add this line to enforce Prettier rules
      'react/jsx-uses-react': 2,
      'react/jsx-uses-vars': 2,
      'react/no-unused-prop-types': 2,
      'react/react-in-jsx-scope': 2,
      'no-labels': 0,
      'arrow-parens': 0,
      semi: ['error', 'always'],
      quotes: 'single',
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
    },
  },
];
