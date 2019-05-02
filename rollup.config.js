import babel from 'rollup-plugin-babel'

module.exports = {
  input: 'packages/auvik-button/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
      plugins: ["@babel/plugin-proposal-class-properties"]
    })
  ]
};