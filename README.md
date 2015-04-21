node-translator
---

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]

[npm-image]: https://img.shields.io/npm/v/ntrans.svg?style=flat
[npm-url]: https://npmjs.org/package/ntrans
[travis-image]: https://img.shields.io/travis/SFantasy/node-translator.svg?style=flat
[travis-url]: https://travis-ci.org/SFantasy/node-translator
[david-image]: https://img.shields.io/david/SFantasy/node-translator.svg?style=flat
[david-url]: https://david-dm.org/SFantasy/node-translator

[![NPM](https://nodei.co/npm/ntrans.png?downloads&downloadRank)](https://nodei.co/npm/ntrans/)

Yet another Chinese-English translate tool written in Node.

## Install

```
[sudo] npm install ntrans [-g]
```

## Usage

```
$ ntrans chrome

 chrome

 美音: [krom]   英音: [krəʊm]

 翻译：n. 铬，铬合金；铬黄；谷歌浏览器
```

## Develop

`node-translator` has been refactored with ECMAScript 6 using [babeljs](https://babeljs.io).

1. Clone the project from github
2. Run `npm install` to install dependencies
3. Run `npm run build` to build package from ES6, or just run `npm run build-watch`

## License

The MIT License
