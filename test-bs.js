var test = require('tape')
var lib = require('./src')
var locale2 = lib.locale2

test('locale2 is a string', function (t) {
  t.plan(1)
  t.equal(typeof locale2(), 'string')
  t.end()
})

test('locale2 is an RFC 5646 standard, Language-Region code', function (t) {
  t.plan(1)
  t.equal(locale2(), 'en-US')
  t.end()
})
