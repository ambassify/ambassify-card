const fs = require('fs');
const pug = require('pug');
const Handlebars = require("handlebars");
const data = require('./data.json');

// Compile the source code
// const compiledCardFunction = pug.compileFile('src/index.html');
// const compiledVCardFunction = pug.compileFile('src/vCard.vcf');
const vcard = fs.readFileSync('src/vCard.vcf');
const cardTemplate = Handlebars.compile(vcard.toString());

const page = fs.readFileSync('src/index.html');
const pageTemplate = Handlebars.compile(page.toString());

data.persons.forEach((person) => {

	const cardSource = cardTemplate({
		person: person,
		company: data.company
	});
	const pageSource = pageTemplate({
		person: person,
		company: data.company
	});
	console.log(cardSource);

    // const card = compiledCardFunction({
        // company: data.company,
        // person
    // });

	const dir = 'dist/' + person.firstName.toLowerCase() + '/';

	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
	}

	fs.writeFileSync(dir + 'vCard.vcf', cardSource);
	fs.writeFileSync(dir + 'index.html', pageSource);
});
