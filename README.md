# locale2 [![Version][npm-version-image]][npm-version-url] [![License][npm-license-image]][npm-license-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![Deps][npm-deps-image]][npm-deps-url] [![DevDeps][npm-devdeps-image]][npm-devdeps-url]

Try as hard as possible to get that browser locale like en-US.

## Notes
I intentionally made the code look like an OCD's dream because
code is poetry so I got all artsy with it. I also smoked __A LOT__.

## Contribute
I'd love to grow this project with some more l10n, i18n pizzaz.

## Use
```
var locale2 = require('locale2');
> locale2
en-US
>
```

### It also pairs well with iso3166-1!
```
var iso3166 = require('iso3166-1');
var locale2 = require('locale2');
> iso3166.from(locale2).to3()
USA
>
```

## Try it!
[![view on requirebin](http://requirebin.com/badge.png)](http://requirebin.com/?gist=998c64b611a2cd6753b4)

If we can't detect your locale, then we'll give you your money back! it's win-win!

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
