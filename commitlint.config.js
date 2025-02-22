const type = [
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'optimize',
  'perf',
  'refactor',
  'revert',
  'style',
  'test',
  'update'
]
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'], // <type> 不能为空
    'type-case': [0],
    'scope-empty': [0], // <scope> 可为空
    'subject-empty': [2, 'never'], // <subject> 不能为空 (默认)
    'subject-full-stop': [2, 'never', '.'], // <subject> 结尾不加'.'
    'subject-case': [0],
    'header-max-length': [2, 'always', 72], // header最大72个字符
    'body-leading-blank': [1, 'always'], // body上面要有换行
    'footer-leading-blank': [1, 'always'], // footer上面要有换行
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']
    ]
  }
}
