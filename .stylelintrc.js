module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: ['**/node_modules/**', '**/*.js', '**/*.ts'],
  plugin: ['stylelint-scss'],
  rules: {
    'no-empty-source': null,
    'block-no-empty': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'content',
          'each',
          'for',
          'function',
          'if',
          'include',
          'mixin',
        ],
      },
    ],
  },
};
