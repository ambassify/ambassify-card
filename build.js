const fs = require('fs');
const pug = require('pug');
const data = require('./data.json');
console.log(data.persons);

// Compile the source code
const compiledFunction = pug.compileFile('test.html');

data.persons.forEach((person) => {
    const content = compiledFunction(person);

    const dir = 'dist/' + person.firstName.toLowerCase() + '/';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    fs.writeFileSync(dir + 'index.html', content);
});
