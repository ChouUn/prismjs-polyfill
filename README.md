# prismjs-polyfill &middot; [![Build Status][link1]][link2] [![npm version][link3]][link4]

[Prism][prismjs].

A polyfill for prism.js to import all languages and isolate various syntax themes because of global style pollution.

## How to use

### Prepare

```jsx
import 'prismjs-polyfill/styles/index.css';
```
OR
```jsx
import 'prismjs-polyfill/styles/index.scss';
```
The latter need **node-sass** and **sass-loader** in Webpack.

### Example

```jsx
const theme = 'prism-twilight';
const lang = 'cpp';

return `
    <pre class=${theme}>
        <code class="language-${lang}">
            ${hljs.highlight(lang, code, true).value}
        </code>
    </pre>
`;
```
It will render to :
```html
<pre class="prism-twilight">
    <code class="language-cpp">
        ...
    </code>
</pre>
```

### About module

```jsx
import Prism, { languages, themes } from 'prismjs-polyfill';
```
It will get the Prism supporting all languages, an Array of languages, and an Array of themes.

## Build

```shell
$ npm run build 
```

## Publish

```shell
$ npm run release
```

[link1]:   https://travis-ci.org/ChouUn/prismjs-polyfill.svg?branch=master
[link2]:   https://travis-ci.org/ChouUn/prismjs-polyfill
[link3]:   https://img.shields.io/npm/v/prismjs-polyfill.svg?style=flat
[link4]:   https://www.npmjs.com/package/prismjs-polyfill
[prismjs]: http://prismjs.com/