var test = require('tape');

test('it gets a locale', function (t) {
  var Locale = require('..');
  t.plan(1);
  t.equal(typeof Locale, 'string');
});
