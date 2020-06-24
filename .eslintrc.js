module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-undef": "off",
    "no-shadow": "off",
    "no-param-reassign": ["error", { props: false }],
    "linebreak-style": ["error", "windows"],
    "object-curly-newline": "off",
    "global-require": "off",
    "func-names": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
