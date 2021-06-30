const animeback_submit = require('@taistudio/animeback-submit');
const fs = require('fs');
fs.writeFileSync('index.json', JSON.stringify(animeback_submit));

const cheerio = require('cheerio');
const $ = cheerio.load('<meta http-equiv="Content-Type" content="application/json; charset=UTF-8" />');

$('body').text(JSON.stringify(animeback_submit));

fs.writeFileSync('index.html', $.html());