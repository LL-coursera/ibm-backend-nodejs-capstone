module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'semi': ['error', 'never'], // No semicolon required at the end of statements
    'comma-spacing': ['error', { 'before': false, 'after': true }], // A space after a comma
    'no-multiple-empty-lines': ['error', { 'max': 1 }], // No two blank lines
    'indent': ['error', 2], // Only two spaces for indentation
    'quotes': ['error', 'single'], // Strings should use single quotes
    'eqeqeq': ['error', 'always'] // Enforce the use of === and !== instead of == and !=
  }
}
