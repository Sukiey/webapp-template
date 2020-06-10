module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  rules: {
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'warn',
    'prefer-const': 'warn',
    'import-order': 'off',
    'import/first': 'off'
  },
};
