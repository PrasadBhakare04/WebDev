const lang = require('franc');
const langs = require('langs');
const colors = require('colors');
const ip = process.argv[2];
const langCode = lang(ip);
if (langCode === 'und') {
    console.log('Cannot guess'.red);
}
else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is : ${language.name}`.green);
}
