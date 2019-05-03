import babel from 'rollup-plugin-babel'
import multiEntry from 'rollup-plugin-multi-entry'

module.exports = {
  input: ['packages/auvik-button/src/index.js', 'packages/auvik-card/src/index.js'],
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins: [
    multiEntry(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
      plugins: ["@babel/plugin-proposal-class-properties"]
    })
  ]
};