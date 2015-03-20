var fs = require('fs');

fs.readFile(__filename, {encoding: 'utf8'}, gotFileContent);

function gotFileContent(error, content) {
    if (error) {
        console.error(error);
    }
    else {
        console.log('The file content:\n\n%s', content);
    }
}
