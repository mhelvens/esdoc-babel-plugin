# esdoc-babel-plugin

This plugin will run code through a certain set of babel plugins before giving it back to esdoc.
This can be used, for example, to remove certain syntax not supported by esdoc.

## Install and usage

```sh
npm install --save-dev mhelvens/esdoc-babel-plugin
```

Make sure you also install the babel plugins you want to use. For example:

```sh
npm install --save-dev babel-plugin-angular2-annotations babel-plugin-transform-decorators-legacy babel-plugin-transform-flow-strip-types
```

Configure esdoc to use this plugin, and specify the set of babel plugins you wish to run, in `.esdoc.json`:

```javascript
{
  // ...
  "plugins": [
    // ...
    {
      "name": "esdoc-babel-plugin",
      "option": {
        "plugins": [
          "babel-plugin-angular2-annotations",
          "transform-decorators-legacy",
          "transform-flow-strip-types"
        ]
      }
    }
  ]
}
```

Note that the `"option"` object is passed directly to babel, so it supports all options that babel supports.

Execute ESDoc:

```sh
esdoc
```

## License

MIT

## Authors

Maintained by [Michiel Helvensteijn](http://www.mhelvens.net).

Originally based on `esdoc-flow-plugin` by [Edgardo Avilés @eaviles](https://twitter.com/eaviles).
