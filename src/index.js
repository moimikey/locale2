module.exports = (function() {
  return ((global.clientInformation || global.navigator || Object.create(null)).language)
  || global.navigator && (global.navigator.userLanguage || global.navigator.languages[1])
  || (locale = process.env.LANG || process.env.LC_CTYPE) && locale.split('.')[0].replace('_','-')
  || undefined
})();
