module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: [
          './tsconfig.json',
          './tsconfig.node.json'
        ]
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
    // project: ['./tsconfig.json']
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
