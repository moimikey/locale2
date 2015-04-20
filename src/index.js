module.exports = (function() {
  return ((global.clientInformation || global.navigator || Object.create(null)).language) ||
  global.navigator && (global.navigator.userLanguage || global.navigator.languages[1])
  || undefined
})();
