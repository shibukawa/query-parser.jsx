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
                dom.document.write([
                        query.word,
                        query.or ? "OR" : "",
                        query.not ? "NOT" : "",
                        query.raw ? "ROW" : "",
                        '<br/>'
                ].join(''));
            }
            event.preventDefault();
        }, false);
    }
}

