const fs = require('fs');
const Handlebars = require("handlebars");
const data = require('./data.json');

const vcard = fs.readFileSync('src/vCard.vcf');
const cardTemplate = Handlebars.compile(vcard.toString());

const page = fs.readFileSync('src/index.html');
const pageTemplate = Handlebars.compile(page.toString());

Handlebars.registerHelper('url', function () {
    return this.person.firstName.toLowerCase();
})

data.persons.forEach((person) => {

	const cardSource = cardTemplate({
		person: person,
		company: data.company
	});
	const pageSource = pageTemplate({
		person: person,
		company: data.company
	});

	const dir = 'dist/' + person.firstName.toLowerCase() + '/';

	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
	}

	fs.writeFileSync(dir + 'vCard.vcf', cardSource);
	fs.writeFileSync(dir + 'index.html', pageSource);
});
