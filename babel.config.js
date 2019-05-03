const defaultAlias = {
  '@auvik/ui': './packages/auvik-ui/src'
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