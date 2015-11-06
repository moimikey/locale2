exports.locale2 = function(locale) {
  return ((global.clientInformation || global.navigator || Object.create(null)).language)
  || global.navigator && (global.navigator.userLanguage ||
                         (global.navigator.languages && global.navigator.languages[0]) ||
                         (global.navigator.userAgent && global.navigator.userAgent.match(/;.(\w+\-\w+)/i)[1]))

  || process.env && (locale = (process.env.LANG ||
                               process.env.LANGUAGE))
                 && locale.replace(/[.:].*/, '').replace('_','-')
  || undefined
}
