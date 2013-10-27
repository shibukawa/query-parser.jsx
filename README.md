query-parser.jsx
===========================================

Synopsis
---------------

Google-ish query string parser for JSX/JS/CommonJS/AMD

Motivation
---------------

This is a part of [Oktavia](http://oktavia.info). This module provides Google-ish query. It supports the following syntax:

* `AND`: `hello world`
* `OR`: `hello OR world`
* `NOT`: `-hello`
* `RAW`: `"hello world"`

Code Example
---------------

This module provides two classes. These classes

* `QueryStringParser`: Good for parse query string on HTML forms.
* `QueryListParser`: Good for processing command line tools.

### Use from JSX (Query

```js
// QueryStringParser for console
import "query-string-parser.jsx";
import "js/web.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        dom.id('search_button').addEventListener('click', (event : Event) -> {
            var parser = new QueryStringParser();
            var input = dom.id('search_box') as HTMLInputElement;
            var queries = parser.parse(input.value);
            for (var i = 0; i < queries.length; i++)
            {
                var query = queries[i];
                var str = [query.word, query.or ? "OR" : "", query.not ? "NOT" : "", query.raw ? "ROW" : "", '<br/>'].join('')
                dom.document.write(str);
            }
            event.preventDefault();
        }, false);
    }
}
```

```js
// QueryListParser for console
import "query-parser.jsx";
import "console.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        var parser = new QueryListParser();
        var queries = parser.parse(argv);
        for (var i = 0; i < queries.length; i++)
        {
            var query = queries[i];
            console.log(query.word, query.or ? "OR" : "", query.not ? "NOT" : "", query.raw ? "ROW" : "");
        }
    }
}
```

### Use from node.js

```js
var QueryStringParser = require('query-parser.common.js').QueryStringParser;
var QueryListParser = require('query-parser.common.js').QueryListParser;
```

### Use from require.js

```js
// use query-parser.amd.js
define(['query-parser.amd.jsx'], function (queryparser) {
    var QueryStringParser = queryparser.QueryStringParser;
    var QueryListParser = queryparser.QueryListParser;

});
```

### Use via standard JSX function

```html
<script src="query-parser.js" type="text/javascript"></script>
<script type="text/javascript">
window.onload = function () {
    var QueryStringParser = JSX.require("src/query-parser.js").QueryStringParser;
    var QueryListParser = JSX.require("src/query-parser.js").QueryListParser;
});
</script>
```

### Use via global variables

```html
<script src="query-parser.global.js" type="text/javascript"></script>
<script type="text/javascript">
window.onload = function () {
    var parser1 = new QueryStringParser();
    var parser2 = new QueryListParser();
}
</script>
```

Installation
---------------

```sh
$ npm install query-parser.jsx
```

API Reference
------------------

Write reference here!

Development
-------------

## JSX

Don't be afraid [JSX](http://jsx.github.io)! If you have an experience of JavaScript, you can learn JSX
quickly.

* Static type system and unified class syntax.
* All variables and methods belong to class.
* JSX includes optimizer. You don't have to write tricky unreadalbe code for speed.
* You can use almost all JavaScript API as you know. Some functions become static class functions. See [reference](http://jsx.github.io/doc/stdlibref.html).

## Setup

To create development environment, call following command:

```sh
$ npm install
```

## Repository

* Repository: git://github.com/shibukawa/query-parser.jsx.git
* Issues: https://github.com/shibukawa/query-parser.jsx/issues

## Run Test

```sh
$ grunt test
```

## Build

```sh
$ grunt build
```

## Generate API reference

```sh
$ grunt doc
```

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

MIT

Complete license is written in `LICENSE.md`.
