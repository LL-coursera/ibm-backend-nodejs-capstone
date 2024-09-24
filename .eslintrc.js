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
    'semi': ['error', 'never'], // Disallow semicolons at the end of statements
    'no-extra-semi': 'error', // Disallow extra semicolons
    'indent': ['error', 2], // Enforce 2 spaces for indentation
    'comma-spacing': ['error', { 'before': false, 'after': true }], // Ensure space after a comma
    'no-multiple-empty-lines': ['error', { 'max': 1 }], // Enforce a max of one empty line
    'quotes': ['error', 'single'], // Enforce single quotes for strings
    'eqeqeq': ['error', 'always'], // Enforce strict equality (`===`)
    'no-mixed-spaces-and-tabs': ['error'], // Disallow mixing spaces and tabs for indentation
  }
}
