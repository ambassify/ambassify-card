const fs = require('fs');
const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('test.html');

const content = compiledFunction({
    name: 'Timothy',
    address: {
        zip: 2440
    }
});
fs.writeFileSync('dist/bla.html', content);
