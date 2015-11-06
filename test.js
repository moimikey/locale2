var test    = require('tape')
var rewire  = require('rewire')
var locale2 = rewire('./')

test('locale2 returns a string when called', function (t) {
  t.plan(1)
  t.equal(typeof locale2(), 'string', 'you should report this as failing!')
  t.end()
})

test('locale2 can parse differently formatted locales', function (t) {
  locale2.__with__('process.env.LANG', 'fil-PH')(function() {
    t.equal(locale2(), 'fil-PH')
  })
  locale2.__with__('process.env.LANG', 'fil_PH')(function() {
    t.equal(locale2(), 'fil-PH')
  })
  t.end()
})

test('clientInformation.language', function (t) {
  t.plan(1)
  locale2.__with__({
    clientInformation: {
      language: 'en-AA'
    }
  })(function() {
    t.equal(locale2(), 'en-AA')
    t.end()
  })
})

test('navigator.language', function (t) {
  t.plan(1)
  locale2.__with__({
    navigator: {
      language: 'en-BB'
    }
  })(function() {
    t.equal(locale2(), 'en-BB')
    t.end()
  })
})

test('navigator.userLanguage', function (t) {
  t.plan(1)
  locale2.__with__({
    clientInformation: {
      language: 'en-CC'
    }
  })(function () {
    t.equal(locale2(), 'en-CC')
    t.end()
  })
})

test('navigator.languages', function (t) {
  t.plan(1)
  locale2.__with__({
    navigator: {
      languages: ['en-DD', 'en']
    }
  })(function () {
    t.equal(locale2(), 'en-DD')
    t.end()
  })
})

test('navigator.userAgent', function (t) {
  t.plan(1)
  locale2.__with__({
    navigator: {
      userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-EE) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10'
    }
  })(function () {
    t.equal(locale2(), 'en-EE')
    t.end()
  })
})

test('process.env.LANG', function (t) {
  t.plan(1)
  locale2.__with__('process.env.LANG', 'en_FF.UTF-8')(function () {
    t.equal(locale2(), 'en-FF')
    t.end()
  })
})
