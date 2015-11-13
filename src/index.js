"use strict"

var utils = require('./utils')

function getLocale(locale) {
  if (locale) {
    return locale
  }

  if (global.Intl && typeof global.Intl.DateTimeFormat === 'function') {
    return global.Intl.DateTimeFormat().resolved.locale
  }

  return ((global.clientInformation
        || global.navigator
        || Object.create(null)
  ).language)

  || global.navigator && (global.navigator.userLanguage
                      || (global.navigator.languages && global.navigator.languages[0]) ||
                         (global.navigator.userAgent && global.navigator.userAgent.match(/;.(\w+\-\w+)/i)[1]))

  || process.env && (locale = (process.env.LANG
                           ||  process.env.LANGUAGE))
                 && locale.replace(/[.:].*/, '')
}

var locale2 = function(locale) {
  return utils.formatLocale(getLocale(locale))
}

exports.locale2 = locale2
