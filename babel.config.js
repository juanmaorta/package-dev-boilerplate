const defaultAlias = {
  '@auvik/button': './packages/auvik-button/src',
  '@auvik/card': './packages/auvik-card/src',
};

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    ["babel-plugin-module-resolver",
      { alias: defaultAlias }
    ]
  ]
};