# electron-react-starter

> Yet another starter kit for React & Electron.

## Roadmap

What's currently working:

* Webpack bundling (with hot reloading)
* Building & running Electron app

Work in progress:

* Better sample code (current one is stolen from [this repo](https://github.com/chentsulin/electron-react-boilerplate))
* Packaging
* More, hopefully.

---

## Why?

I know what you're thinking: "We've already had like billions of these! Why create another one?"

Good question. I love what the others have, but the main problem is, I've tried some of these and none of them fit my use case. For example, [this one](https://github.com/chentsulin/electron-react-boilerplate) is way too overkill, [this one](https://github.com/jschr/electron-react-redux-boilerplate) doesn't even have Webpack, and [this one](https://github.com/jogleasonjr/electron-react-webpack-quick-start) does most of what I want but the folder structures all seem off.

So I've went and put together my own, utilising some of the features and workflows that I like from the ones mentioned above, to create a simple, straightforward starter kit that fits well for my use case.

## Requirements

* node.js (v6 LTS)
* npm (v3.0.0+)

## Installation

First, you will have to install the npm modules.

```bash
# Install dependencies and run the app
$ npm install && npm run dev
```

## Development workflow

### Building & running the app

```bash
$ npm run dev
```

This will run the `webpack` command and bundle all scripts into the `build/` directory.

### Hot reloading

You can also set up hot reloading to enable [automatic refreshing](https://webpack.github.io/docs/webpack-dev-server.html#automatic-refresh) using `webpack-dev-server`.

You will need two terminal tabs.

```bash
# Run this on the first tab
$ npm run watch
# Then run this on another to start the Electron app
$ npm run dev
```

### Testing

```bash
$ npm test
```

Currently, this only does linting to ensure the code follows the [standardjs](http://standardjs.com) guidelines. I wil hopefully add testing support with Mocha soon.

### Packaging

Coming soon!
