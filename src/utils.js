"use strict"

/**
 * Assuming the locale is in the form of
 * langtag-region (en-US)
 *
 * @param  {String} locale
 * @return {String}
 */
 exports.formatLocale = function(locale) {
  if (typeof locale !== 'string') return locale
  // 'en-US-u-VA-posix'.split('-').slice(0, 2)
  // ["en", "US"]
  return locale.split('-').slice(0, 2).map(function(chunk, index) {
    // en[0]-US[1] <- chunk[1].toUpperCase()
    if (index !== 0 && chunk.length === 2) return chunk.toUpperCase()
    return chunk
  }).join('-')
}
