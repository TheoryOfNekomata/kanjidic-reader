(function () {
    var fs = require('fs'),
        byline = require('byline'),
        parse = require('./parse'),

        KanjiInfo = function KanjiInfo(line) {
            return parse(line);
        };

    module.exports = function (path, cb) {
        var data = [];
            inputStream = byline(fs.createReadStream(path), { encoding: 'utf8' });

        inputStream
            .on('data', (line) => {
                if (line.indexOf('#') === 0) {
                    return;
                }
                data.push(new KanjiInfo(line))
            })
            .on('end', () => {
                (cb || function () {})(data);
            });
    };
})();
