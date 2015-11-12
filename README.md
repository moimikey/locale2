# locale2
[![Version][npm-version-image]][npm-version-url] [![License][npm-license-image]][npm-license-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![Deps][npm-deps-image]][npm-deps-url] [![DevDeps][npm-devdeps-image]][npm-devdeps-url] [![Build Status][drone-image]][drone-url]

Detect the client's Language-Region locale (en-US) and return an RFC 5646 compliant, BCP47 language tag, in node or the browser. Browserify and Webpack friendly!

# Learn More

> In 2009, IETF published RFC 5646, "Tags for Identifying Languages," in which
"...describes the structure, content, construction, and semantics of language tags
for use in cases where it is desirable to indicate the language used in an
information object."

- [RFC 5646: Tags for Identifying Languages](https://tools.ietf.org/html/rfc5646)



# Unit tested and browser tested!
[![BrowserStack][browserstack-logo]][browserstack-url]
> ✓ Windows 7, IE 8
> ✓ Windows 7, IE 9
> ✓ Windows 7, IE 10
> ✓ Windows 7, IE 11
> ✓ Windows 8, IE 10
> ✓ Windows 8.1, IE 11
> ✓ Windows 8.1, Firefox 41
> ✓ Windows 8.1, Safari 5.1
> ✓ Windows 8.1, Chrome 46
> ✓ Windows 10, Edge 12
> ✓ OS X Yosemite, Safari 8
> ✓ OS X Yosemite, Firefox 41
> ✓ OS X Yosemite, Chrome 46
> ### **OPERA**
> Unfortunately, there is an inconsistency with Opera, as it returns
a "**simple language subtag**" such as: **en, fr, de**; excluding the region.

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

# Browser testing (private)
```sh
npm run test-bs
```

# Try it!
[![view on requirebin](http://requirebin.com/badge.png)](http://requirebin.com/?gist=998c64b611a2cd6753b4)

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
[drone-url]: https://drone.io/github.com/moimikey/locale2/latest
[drone-image]: https://drone.io/github.com/moimikey/locale2/status.png
