# Frontend Hello World

_The place to start your next frontend application in 2019_

This is a Hello World application, using [Prettier](https://prettier.io/docs/en/index.html), [Tailwind](https://tailwindcss.com/docs/what-is-tailwind/), [Mithril](https://mithril.js.org/#what-is-mithril) [JSX](https://mithril.js.org/jsx.html) (optional), [PurgeCSS](https://www.purgecss.com/) and [Laravel Mix](https://laravel-mix.com/docs/4.0/basic-example).

## Starting the project

In the project's folder:

```bash
yarn  # install dependencies
yarn prod  # build for production
yarn server  # serve the prodution build
```

Open a browser at the given Local URL.

## Prettier

Always use prettier before commiting your code.

It is recommanded to install an extension that formats on save, like VSCode's _Prettier - Code formatter_.

If you do install it, add the following line in your workspace settings:

```json
{
  "editor.formatOnSave": true
}
```

## Editorconfig

As for Prettier, it is recommended that you use an extension that respects the _.editorconfig_ file.

In VSCode, you can install _EditorConfig for VS Code_.

## Scripts

### hot

Builds in development mode and automatically reloads when files have been altered.

### dev

Builds in development mode.

### prod

Builds in production mode.

### server

Starts a simple webserver in the public directory, serving a single file (usefull for SPA).

### prettify

Runs Prettier on all files inside the source directory.

## JSX Support

Install the Babel plugin.

```bash
yarn add -D @babel/plugin-transform-react-jsx
```

Create a file named _.babelrc_ in the root directory and put the following content in it:

```json
{
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "pragma": "m",
        "pragmaFrag": "m.fragment"
      }
    ]
  ]
}
```

If you enable JSX, you still need to import Mithril in all files that use JSX.

```javascript
import m from 'mithril'
```
