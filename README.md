# How to add a new package for development

Simply create the folder inside `packages`
The structure must be:

`
packages -
         name-of-your-package
              - src
                  - index.js
                  - other files
              - package.json
`

To allow the build for the development server (local), add a new alias in _babel.config.js_, 
so you can use fancy package names such as `@auvik/button`

```#javascript
const defaultAlias = {
  '@auvik/button': './packages/auvik-button/src',
  '@auvik/card': './packages/auvik-card/src',
};
```

# How to add a new package for buildin

The new modules must be added to the _rollup_ build process, as elements of an array:

```#javascript
module.exports = {
  input: ['packages/auvik-button/src/index.js', 'packages/auvik-card/src/index.js'],
  ...
```