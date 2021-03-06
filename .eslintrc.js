module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: [2, 'always'],
    'max-len': ["error", { "code": 100 }],
    "import/named": 0,
    'vue/no-dupe-keys': 0
  }
};
