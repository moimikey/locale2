"use strict"

var utils = {

  /**
   * Assuming the locale is in the form of
   * langtag-region (en-US)
   *
   * @param  {String} locale
   * @return {String}
   */
  formatLocale: function(locale) {
    return locale.split('-')
                 .map(function(chunk, index) {
                  if (index === 1) return chunk.toUpperCase()
                  return chunk
                 })
                 .join('-')
  }
}

module.exports = utils
