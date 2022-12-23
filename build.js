const fs = require('fs');
const pug = require('pug');
const data = require('./data.json');
console.log(data.persons);

// Compile the source code
const compiledCardFunction = pug.compileFile('src/index.html');
// const compiledVCardFunction = pug.compileFile('src/vCard.vcf');

data.persons.forEach((person) => {
    const card = compiledCardFunction({
        company: data.company,
        person
    });
    // const vcard = compiledVCardFunction({
        // company: data.company,
        // person
    // });

    const dir = 'dist/' + person.firstName.toLowerCase() + '/';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    fs.writeFileSync(dir + 'index.html', card);
    // fs.writeFileSync(dir + 'vCard.vcf', vcard);
});
