const globals = require('globals')
const prettier = require('eslint-plugin-prettier')
const vue = require('eslint-plugin-vue')
const parser = require('vue-eslint-parser')
const typescript = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')

module.exports = [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/public/**',
      '**/h5/**',
      '**/unpackage/**',
      '**/utils/**',
      '**/stores/**',
      '**/uni_modules/**',
      'src/request/index.js',
      'src/request/api.js'
    ]
  },
  // JavaScript/TypeScript 基础配置
  {
    files: ['*.ts', '*.tsx', '*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      prettier
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          args: 'none',
          vars: 'all',
          caughtErrors: 'all'
        }
      ],
      'no-undef': 'error', // 检测未定义的变量
      'no-const-assign': 'error', // 检测常量被重新赋值
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': 'error',
      quotes: ['error', 'single'],
      eqeqeq: 'error',
      curly: 'error',
      semi: 0
    }
  },
  // Vue 文件配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        uni: 'readonly', // 声明 `uni` 为只读全局变量
        wx: 'readonly', // 如果需要，可以添加更多全局变量
        setTimeout: 'readonly', // 声明 setTimeout 为只读全局变量
        clearTimeout: 'readonly' // 通常与 setTimeout 一起声明
      }
    },
    plugins: {
      vue,
      prettier
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          args: 'none',
          vars: 'all',
          caughtErrors: 'all'
        }
      ],
      'no-undef': 'error', // 检测未定义的变量
      'no-const-assign': 'error', // 检测常量被重新赋值
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': 'error',
      quotes: ['error', 'single'],
      eqeqeq: 'error',
      curly: 'error',
      semi: 0
    }
  }
]
