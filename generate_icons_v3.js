const fs = require('fs');
const path = require('path');
const simpleIcons = require('simple-icons');

const outDir = path.join(__dirname, 'public', 'icons');

const keys = Object.keys(simpleIcons);
const getIcon = (slug) => {
  const iconKey = keys.find(k => k.toLowerCase() === 'si' + slug.toLowerCase());
  return iconKey ? simpleIcons[iconKey] : null;
};

const toWrite = {
  'linux': 'linux',
  'windows': 'windows11',
  'cloudflare': 'cloudflare',
  'owasp': 'owasp',
  'git': 'git',
  'python': 'python',
  'bash': 'gnubash',
  'powershell': 'powershell',
  'mysql': 'mysql',
  'flask': 'flask'
};

for (const [name, slug] of Object.entries(toWrite)) {
  const icon = getIcon(slug);
  if (icon) {
    let svg = icon.svg.replace('<svg ', '<svg fill="#FFFFFF" ');
    fs.writeFileSync(path.join(outDir, `${name}.svg`), svg);
  }
}
