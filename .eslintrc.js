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
    'semi': ['error', 'never'], // Disallow semicolons
    'comma-spacing': ['error', { 'before': false, 'after': true }], // A space after a comma
    'no-multiple-empty-lines': ['error', { 'max': 1 }], // No two blank lines
    'indent': ['error', 2], // Enforce 2 spaces for indentation
    'quotes': ['error', 'single'], // Use single quotes for strings
    'eqeqeq': ['error', 'always'], // Enforce strict equality (===)
    'no-extra-semi': 'error', // Disallow extra semicolons
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'] // Ensure spaces are used consistently for indentation
  }
}
