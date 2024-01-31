module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended"],
  plugins: ["marmelab"],
  rules: {
    "marmelab/matchFuncLorrainSuffix": [
      2,
      {
        include: [],
        exclude: [""],
      },
    ],
  },
};
