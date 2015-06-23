# webgl2-core-extensions

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

This module provides an array of extension names that have been promoted to core in WebGL2.

```js
var core = require('webgl2-core-extensions')

core.indexOf('EXT_blend_minmax') >= 0
//=> true

core.indexOf('WEBGL_compressed_texture_s3tc') >= 0
//=> false
```

See [WebGL Extension Registry](https://www.khronos.org/registry/webgl/extensions/) for details. PRs welcome.

## Usage

[![NPM](https://nodei.co/npm/webgl2-core-extensions.png)](https://www.npmjs.com/package/webgl2-core-extensions)

#### `extensions = require('webgl2-core-extensions')`

Provides an array of strings, `extensions`.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/webgl2-core-extensions/blob/master/LICENSE.md) for details.
