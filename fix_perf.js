const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // 1. Remove backdrop-blur from large repetitive cards to fix scroll lag
  // Keep it on navbar if we want, but removing it from cards (skills, projects, achievements, certs) is crucial.
  if (file !== 'navbar.tsx') {
    content = content.replace(/backdrop-blur-xl/g, '');
    content = content.replace(/backdrop-blur-lg/g, '');
    content = content.replace(/backdrop-blur-md/g, '');
    content = content.replace(/backdrop-blur-sm/g, '');
    content = content.replace(/backdrop-blur/g, '');
  }

  // 2. Fix the extremely heavy moving mask-images on backgrounds
  // We can keep the gradient, but the mask-image radial gradient on a huge fixed/absolute div is very expensive
  content = content.replace(/\[mask-image:radial-gradient\([^)]+\)\]/g, '');

  // 3. Custom cursor specific lag
  if (file === 'custom-cursor.tsx') {
    content = content.replace(/backdropFilter:[^,]+,/g, '');
    content = content.replace(/backdropFilter:[^}]+}/g, '}');
    content = content.replace(/mixBlendMode: "difference"/g, '/* mixBlendMode removed for perf */');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Optimized ${file}`);
  }
}
