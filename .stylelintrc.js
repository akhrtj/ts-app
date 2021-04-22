module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: ['**/node_modules/**', '**/*.js', '**/*.ts'],
  plugin: ['stylelint-scss'],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
    'no-empty-source': null,
    'block-no-empty': null,
  },
};
