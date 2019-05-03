const defaultAlias = {
  '@auvik/button': './packages/auvik-button/src'
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