const vuePlugin = require('eslint-plugin-vue')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const prettierPlugin = require('eslint-plugin-prettier')
const typescriptParser = require('@typescript-eslint/parser')

module.exports = [
  {
    parser: 'vue-eslint-parser', // 使用 vue-eslint-parser 来解析 Vue 文件
    parserOptions: {
      parser: '@typescript-eslint/parser', // 解析 Vue 文件中的 TypeScript 部分
      ecmaVersion: 'latest', // 支持最新的 ECMAScript 版本
      sourceType: 'module' // 支持 ES 模块
    },
    extends: [
      'eslint:recommended', // 启用 ESLint 默认规则
      'plugin:vue/vue3-essential', // 启用 Vue 3 特有的规则
      'plugin:@typescript-eslint/recommended' // 启用 TypeScript 规则
    ],
    plugins: ['vue', '@typescript-eslint'], // 使用 Vue 和 TypeScript 插件

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
    },

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
  {
    files: ['*.ts', '*.tsx', '*.vue'],
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
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  {
    files: ['*.vue'],
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
