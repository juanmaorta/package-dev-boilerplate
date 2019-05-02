import babel from 'rollup-plugin-babel'

module.exports = {
  input: 'packages/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};