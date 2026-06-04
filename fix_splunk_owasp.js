const fs = require('fs');
const path = require('path');
const simpleIcons = require('simple-icons');

const outDir = path.join(__dirname, 'public', 'icons');

// Splunk (make it pink)
let splunkSvg = simpleIcons.siSplunk.svg.replace('<svg ', '<svg fill="#E32367" ');
fs.writeFileSync(path.join(outDir, 'splunk.svg'), splunkSvg);

// OWASP (make it blue)
let owaspSvg = simpleIcons.siOwasp.svg.replace('<svg ', '<svg fill="#336699" ');
fs.writeFileSync(path.join(outDir, 'owasp.svg'), owaspSvg);

console.log('Fixed Splunk and OWASP colors');
