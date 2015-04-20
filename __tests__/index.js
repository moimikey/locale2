var test = require('tape');
var Locale = require('..');

test('it gets a locale', function (t) {
  t.plan(2);
  t.equal(typeof Locale, 'string');
  t.equal(Locale, new RegExp('^[a-z]{2}-[A-Za-z]{2}$/'));
});
