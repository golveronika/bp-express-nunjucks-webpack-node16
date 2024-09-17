/**
 * prettier:
 *  - https://prettier.io/docs/en/configuration
 */
/** @type {import('prettier').Config} */
const config = {
  arrowParens: 'avoid',
  printWidth: 100,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  plugins: ['prettier-plugin-jinja-template'],
  overrides: [
    {
      files: ['*.njk'],
      options: {
        parser: 'jinja-template'
      }
    }
  ]
}

module.exports = config
