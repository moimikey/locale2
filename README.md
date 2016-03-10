# locale2 [![Build Status][travis-image]][travis-url]
[![Version][npm-version-image]][npm-version-url] [![License][npm-license-image]][npm-license-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![Deps][npm-deps-image]][npm-deps-url] [![DevDeps][npm-devdeps-image]][npm-devdeps-url]

Try as hard as possible to detect the client's language tag ("locale") in node or the browser. Browserify and Webpack friendly!

# Language Tags, Locale, RFC 5646 and BCP 47

In 2009, IETF published **RFC 5646**, _"Tags for Identifying Languages,"_ in which "...describes the structure, content, construction, and semantics of **language tags** for use in cases where it is desirable to indicate the language used in an information object."

A **language tag** is composed from a sequence of one or more _"subtags"_, each of which refines or narrows the range of language identified by the overall tag.  Subtags, in turn, are a sequence of alphanumeric characters (letters and digits), distinguished and separated from other subtags in a tag by a hyphen ("-", [Unicode] U+002D).

> en-US

> br-PT

> fil-PH

1. [RFC 5646](https://tools.ietf.org/html/rfc5646)
1. [BCP 47](https://tools.ietf.org/html/bcp47)

# Unit tested and browser tested!
[![BrowserStack][browserstack-logo]][browserstack-url]
- ✓ IE 8
- ✓ IE 9
- ✓ IE 10
- ✓ IE 12 (Edge)
- ✓ Safari 5.1+
- ✓ Opera (Presto & Webkit)
- ✓ Firefox
- ✓ Chrome

# It works in node too!
```sh
$ babel-node
> import locale2 from 'locale2'
> locale2
en-US
>
```

## ...and pairs well with [iso3166-1](https://npmjs.org/package/iso3166-1)!
```sh
var iso3166 = require('iso3166-1')
var locale2 = require('locale2')
> iso3166.from(locale2).to3()
USA
>
```

# Get it!
```sh
npm install --no-optional
npm test
```

# Browser testing (currently private)
```sh
npm run test-bs
```

# Try it!
[![view on requirebin](http://requirebin.com/badge.png)](http://requirebin.com/?gist=8394988344ff2514df5e)

# Guaranteed!
If we can't detect your locale, then we'll give you your money back! it's win-win!

[browserstack-logo]: https://raw.githubusercontent.com/moimikey/locale2/master/assets/bs.png
[browserstack-url]: http://browserstack.com
[npm-version-url]: https://www.npmjs.com/package/locale2
[npm-version-image]: https://img.shields.io/npm/v/locale2.svg
[npm-license-url]: https://github.com/moimikey/locale2/blob/master/LICENSE
[npm-license-image]: https://img.shields.io/npm/l/locale2.svg
[npm-downloads-url]: https://www.npmjs.com/package/locale2
[npm-downloads-image]: https://img.shields.io/npm/dm/locale2.svg
[npm-deps-url]: https://david-dm.org/moimikey/locale2
[npm-deps-image]: https://img.shields.io/david/moimikey/locale2.svg
[npm-devdeps-url]: https://david-dm.org/moimikey/locale2
[npm-devdeps-image]: https://img.shields.io/david/dev/moimikey/locale2.svg
[travis-url]: https://travis-ci.org/moimikey/locale2
[travis-image]: https://travis-ci.org/moimikey/locale2.svg?branch=master
