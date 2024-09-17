module.exports = {
  customSyntax: 'postcss-scss',
  rules: {
    'block-no-empty': true
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.sass'],
      customSyntax: 'postcss-sass'
    }
  ]
}
