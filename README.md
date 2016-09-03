# kanjidic-reader

Script that reads files in KANJIDIC format.

## Why?

I need to parse files that are in [KANJIDIC](http://www.csse.monash.edu.au/~jwb/kanjidic_doc.html) format for my Japanese dictionary app, so I made one in Node.js.

On top of `kanjidic-reader`, I have created [`kanjidic-database-importer`](https://github.com/Temoto-kun/kanjidic-database-importer) for importing parsed KANJIDIC data to a database, and [`kanjidic-exporter`](https://github.com/Temoto-kun/kanjidic-exporter) for producing output from parsed KANJIDIC data.

## Notes

The source files in the KANJIDIC home page are EUC-JP encoded and gzipped, while `kanjidic-reader` operates with UTF-8 files. I will try to detect encodings in the future.

## Contribution

Sure thing! Just clone the repo.

Please star the repo if you find it useful in your projects.

## License

MIT. See [LICENSE file](https://raw.githubusercontent.com/Temoto-kun/kanjidic-reader/master/LICENSE) for details.
