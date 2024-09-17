# xsell.money

## ⚗️ Features

- [Webpack](https://webpack.js.org)
- [Nunjucks](https://mozilla.github.io/nunjucks) (supports multiple pages)
- [Babel](https://babeljs.io)
- [TypeScript](https://typescriptlang.org) (disabled by default)
- [ESLint](https://eslint.org)
- [Sass](https://sass-lang.com)
- [PostCSS](https://postcss.org)
- [StyleLint](https://stylelint.io)
- [SVG Sprite](https://github.com/JetBrains/svg-sprite-loader)

<br/>

## 🚀 Usage

```bash

# Install dependencies
yarn          # npm install

# Run webpack-dev-server and let the magic happen
yarn start    # npm start

# Build the project from sources
yarn build    # npm run-script build

```

<br/>

## 💻 Available Scripts

- `serve` - run the `webpack-dev-server`
- `build` - build the project

<br/>

## 📘 Documentation

### TypeScript Support

By default, TypeScript support is disabled. To enable it, set the `TS_SUPPORT` environment variable to `true` in `package.json`.

```bash
... TS_SUPPORT=true ...
```

### Multiple pages

Just create nunjucks files in `src` folder

```
┣━ js
┣━ njk
┣━ sass
┣━ home.njk
┣━ page1.njk
┣━ page2.njk
```

### SCSS files

Just import SCSS files with extension:

```sass
// app.sass
// ...
@import common
@import another.scss
// ...
```

### SVG sprite

1. Import SVG icon

```javascript
// src/js/dev/icons.js
import '@/icons/github.svg'
```

2. Use this icon in your template

<!-- prettier-ignore -->
```javascript
// *.njk z
{{ icon('github', 'custom-class-name') }}
```

### Environment variables

#### `NODE_ENV`

> Type: `'development' | 'production' | none` <br/>
> Default: `'development'`

Indicates the current mode.

#### `OUTPUT_DIR`

> Type: `string` <br/>
> Default: `'dist'`

Indicates the directory where the production build files will be generated.

#### `PUBLIC_PATH`

> Type: `string` <br/>
> Default: `'/'`

Indicates the base URL your project bundle will be deployed at.

#### `SOURCE_DIR`

> Type: `string` <br/>
> Default: `'src'`

Indicates the directory where the source files are located.

#### `TS_SUPPORT`

> Type: `'true' | 'false' | none` <br/>
> Default: `none`

Indicates whether TypeScript support should be enabled. <br/>
_`none` is equal to `false`_

<br/>

## 📓 Dependencies

### Webpack:

- [webpack](https://github.com/webpack/webpack)
- [webpack-cli](https://github.com/webpack/webpack-cli)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

### Loaders:

- Nunjucks

  - [html-loader](https://github.com/webpack-contrib/html-loader)
  - [njk-loader(internal)](./config/modules/njk-loader/index.js)
    - [nunjucks](https://github.com/mozilla/nunjucks)

- JavaScript

  - [babel-loader](https://github.com/babel/babel-loader)
    - [@babel/core](https://github.com/babel/babel)
    - [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)

- TypeScript

  - [babel-loader](https://github.com/babel/babel-loader)
    - [@babel/core](https://github.com/babel/babel)
    - [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
  - [ts-loader](https://github.com/TypeStrong/ts-loader)
    - [typescript](https://github.com/microsoft/TypeScript)

- CSS

  - [style-loader](https://github.com/webpack-contrib/style-loader)
  - [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
  - [css-loader](https://github.com/webpack-contrib/css-loader)
  - [postcss-loader](https://github.com/webpack-contrib/postcss-loader)
    - [postcss](https://github.com/postcss/postcss)
    - [autoprefixer](https://github.com/postcss/autoprefixer)
  - [sass-loader](https://github.com/webpack-contrib/sass-loader)
    - [sass](https://github.com/sass/sass)

- Assets

  - [asset modules](https://webpack.js.org/guides/asset-modules)

- SVG

  - [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)
  - [svgo-loader](https://github.com/svg/svgo-loader)

- Optimization
  - [thread-loader](https://github.com/webpack-contrib/thread-loader)

### Plugins:

- HTML

  - [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)

- TypeScript

  - [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)

- CSS

  - [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin)

- Eslint

  - [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin)
    - [ESLint](https://github.com/eslint/eslint)
    - [@babel/core](https://github.com/babel/babel)
    - [@babel/eslint-parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)
    - [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)
    - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

- Stylelint

  - [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin)
    - [postcss-sass](https://github.com/AleshaOleg/postcss-sass)
    - [postcss-scss](https://github.com/postcss/postcss-scss)
    - [StyleLint](https://github.com/stylelint/stylelint)

- Terminal
  - [TerminalClearPlugin(internal)](./config/modules/terminal-clear-plugin/index.js)

### Other:

- Git

  - [lint-staged](https://github.com/lint-staged/lint-staged)

- Code
  - [prettier](https://prettier.io/)

<br/>
