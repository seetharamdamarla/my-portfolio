const fs = require('fs');
const path = require('path');
const simpleIcons = require('simple-icons');

const outDir = path.join(__dirname, 'public', 'icons');

// Search for the actual keys
const keys = Object.keys(simpleIcons);
const getIcon = (slug) => {
  const iconKey = keys.find(k => k.toLowerCase() === 'si' + slug.toLowerCase());
  return iconKey ? simpleIcons[iconKey] : null;
};

const toWrite = {
  'splunk': 'splunk',
  'wazuh': null, 
  'sentinel': 'microsoftazure',
  'defender': 'windows11',
  'wireshark': 'wireshark',
  'virustotal': 'virustotal',
  'burpsuite': 'burpsuite',
  'metasploit': 'metasploit',
  'hashcat': 'hashcat',
  'windows': 'windows11'
};

for (const [name, slug] of Object.entries(toWrite)) {
  if (!slug) continue;
  const icon = getIcon(slug);
  if (icon) {
    // Replace all non-explicitly colored paths (which default to black) with white, or use the brand hex if we want, but white is better for dark mode.
    // simpleIcons svgs don't have fill attributes by default.
    let svg = icon.svg.replace('<svg ', '<svg fill="#FFFFFF" ');
    fs.writeFileSync(path.join(outDir, `${name}.svg`), svg);
  }
}

console.log('Fixed Simple Icons generated with white fill.');
