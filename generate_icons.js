const fs = require('fs');
const path = require('path');
const simpleIcons = require('simple-icons');

const outDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Fallbacks for tools not in simple-icons
const fallbacks = {
  'wazuh': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#3585f8" d="M24 0C10.971 0 0 10.971 0 24s10.629 24 24 24 24-10.629 24-24S37.029 0 24 0m1.371 32.914-4.114-13.029-4.114 13.029h-3.086L8.571 14.743H12l3.771 12.343 3.772-12.343h3.086l3.77 12.343 3.772-12.343H33.6l-5.143 18.171z"/></svg>`,
  'nmap': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  'john': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F87171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  'nessus': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  'sqlmap': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
  'gobuster': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  'hydra': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  'aircrack': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12" y2="20"/></svg>`,
  'suricata': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
};

const mapping = {
  'splunk': 'siSplunk',
  'sentinel': 'siMicrosoftazure',
  'defender': 'siWindows',
  'wireshark': 'siWireshark',
  'virustotal': 'siVirustotal',
  'burpsuite': 'siBurpsuite',
  'metasploit': 'siMetasploit',
  'hashcat': 'siHashcat'
};

const iconsToGenerate = [
  'splunk', 'wazuh', 'sentinel', 'defender', 'wireshark', 'virustotal', 'suricata',
  'burpsuite', 'metasploit', 'nmap', 'john', 'nessus', 'sqlmap', 'hashcat', 'gobuster', 'hydra', 'aircrack'
];

iconsToGenerate.forEach(name => {
  let svgContent = '';
  
  if (mapping[name] && simpleIcons[mapping[name]]) {
    svgContent = simpleIcons[mapping[name]].svg;
  } else if (fallbacks[name]) {
    svgContent = fallbacks[name];
  } else {
    // generic fallback
    svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg>`;
  }
  
  // Replace fill color if needed, but it's okay, we handle colors in CSS or glowColor
  fs.writeFileSync(path.join(outDir, `${name}.svg`), svgContent);
});

console.log('Icons generated successfully.');
