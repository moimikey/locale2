var formatLocale = require('./utils').formatLocale

function getLocale (locale) {
  if (locale) return locale

  if (global.chrome && global.chrome.app && typeof global.chrome.app.getDetails === 'function') {
    locale = global.chrome.app.getDetails()
    if (locale && locale.current_locale) {
      return locale.current_locale
    }
  }

  locale = (global.navigator && (
    (global.navigator.languages && global.navigator.languages[0]) ||
    global.navigator.language ||
    global.navigator.userLanguage
  ))

  if (!locale && global.navigator && global.navigator.userAgent) {
    locale = global.navigator.userAgent.match(/;.(\w+-\w+)/i)
    if (locale) return locale[1]
  }

  if (!locale) {
    locale = (global.clientInformation || Object.create(null)).language
  }

  if (!locale) {
    if (global.Intl && typeof global.Intl.DateTimeFormat === 'function') {
      locale = global.Intl.DateTimeFormat().resolvedOptions && global.Intl.DateTimeFormat().resolvedOptions().locale
    }
    if (!locale && ['LANG', 'LANGUAGE'].some(Object.hasOwnProperty, process.env)) {
      return (process.env.LANG || process.env.LANGUAGE || String())
        .replace(/[.:].*/, '')
        .replace('_', '-')
    }
  }
  return locale
}

var locale2 = function (locale) {
  return formatLocale(getLocale(locale))
}

exports.locale2 = locale2
