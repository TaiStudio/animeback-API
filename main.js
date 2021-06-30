const animeback_submit = require('@taistudio/animeback-submit');
const fs = require('fs');
fs.writeFileSync('index.json', JSON.stringify(animeback_submit));