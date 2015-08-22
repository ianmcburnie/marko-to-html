module.exports = function(inputFileName, dataFileName) {

    var path = require('path');
    var fs = require('fs');

    if (!inputFileName) {
        console.log('No input filename specified');
        return;
    }

    var fs = require('fs');

    var data = {};

    if (dataFileName) {
        var json;

        try {
            json = fs.readFileSync(dataFileName, 'utf8');
        }
        catch(e) {
            console.log('Could not load data file', e);
        }

        try {
            data = JSON.parse(json);
        }
        catch(e) {
            console.log('Could not parse JSON');
        }
    }

    require('marko/node-require').install();

    var template = require(path.resolve(path.dirname(require.main.filename), inputFileName));

    var out = fs.createWriteStream(inputFileName.replace('.marko','.html'), {encoding: 'utf8'});

    template.render(data, out);
}

if(require.main === module) {
    module.exports(process.argv[2], process.argv[3]);
}
