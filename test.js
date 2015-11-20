var test     = require('tape')
var rewire   = require('rewire')
var lib      = rewire('./src')
var locale2  = lib.locale2

test('locale2 is', function(t) {
  t.plan(1)
  t.ok(locale2())
  t.end()
})

test('locale2 returns a locale string', function(t) {
  t.plan(1)
  lib.__with__({
    global: {
      clientInformation: {
        language: 'en-00'
      }
    }
  })(function() {
    t.equal(typeof locale2(), 'string')
    t.end()
  })
})

test('locale2 returns a forced locale', function(t) {
  t.plan(1)
  t.equal(locale2('en-11'), 'en-11')
  t.end()
})

test('locale2 resolved...', function(T) {
  T.test('...clientInformation.language', function(t) {
    t.plan(1)
    lib.__with__({
      global: {
        clientInformation: {
          language: 'en-AA'
        }
      }
    })(function() {
      t.equal(locale2(), 'en-AA')
      t.end()
    })
  })

  T.test('...navigator.language', function(t) {
    t.plan(1)
    lib.__with__({
      global: {
        navigator: {
          language: 'en-bb'
       }
     }
    })(function() {
      t.equal(locale2(), 'en-BB')
      t.end()
    })
  })

  T.test('...navigator.userLanguage', function(t) {
    t.plan(1)
    lib.__with__({
      global: {
        clientInformation: {
          language: 'en-CC'
        }
      }
    })(function () {
      t.equal(locale2(), 'en-CC')
      t.end()
    })
  })

  T.test('...navigator.languages', function(t) {
    t.plan(1)
    lib.__with__({
      global: {
        navigator: {
          languages: ['en-dd', 'en']
        }
      }
    })(function () {
      t.equal(locale2(), 'en-DD')
      t.end()
    })
  })

  T.test('...navigator.userAgent', function(t) {
    t.plan(1)
    lib.__with__({
      global: {
        navigator: {
          userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-EE) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10'
        }
      }
    })(function () {
      t.equal(locale2(), 'en-EE')
      t.end()
    })
  })

  T.test('...process.env.LANG', function(t) {
    t.plan(1)
    lib.__with__({
      global: {},
      process: {
        env: {
          LANG: 'en_ff.UTF-8'
        }
      }
    })(function () {
      t.equal(locale2(), 'en-FF')
      t.end()
    })
  })

  T.test('...process.env.LANGUAGE', function(t) {
    t.plan(1)
    lib.__with__({
      global: {},
      process: {
        env: {
          LANGUAGE: 'en_GG.UTF-8'
        }
      }
    })(function () {
      t.equal(locale2(), 'en-GG')
      t.end()
    })
  })

  T.test('...Intl.DateTimeFormat', function(t) {
    t.plan(1)
    lib.__with__({
      global: {
        Intl: {
          DateTimeFormat: function() {
            return {
              resolved: {
                locale: 'en-hh'
              }
            }
          }
        }
      }
    })(function () {
      t.equal(locale2(), 'en-HH')
      t.end()
    })
  })

  T.test('...chrome.app', function(t) {
    t.plan(1)
    lib.__with__({
      global: {
        chrome: {
          app: {
            getDetails: function() {
              return {
                current_locale: 'en-II'
              }
            }
          }
        }
      }
    })(function () {
      t.equal(locale2(), 'en-II')
      t.end()
    })
  })
})
