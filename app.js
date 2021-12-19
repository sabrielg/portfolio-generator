const fs = require('fs')
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

console.log(name, github);

const pageHTML = generatePage(name, github);


fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;
    
    console.log('Portfolio complete! Check out index.html to see the output!');
})