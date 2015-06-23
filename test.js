var extensions = require('./')
var test = require('tape')

test('list of extensions promoted to core in WebGL2', function(t) {
  t.equal(Array.isArray(extensions), true, 'exports array')
  t.end()
})