const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'ui');
if (fs.existsSync(dir)) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

  for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    if (file === 'custom-cursor.tsx') {
      content = content.replace(/backdropFilter:[^,]+,/g, '');
      content = content.replace(/backdropFilter:[^}]+}/g, '}');
      content = content.replace(/mixBlendMode:\s*"difference"/g, '/* mixBlendMode removed for perf */');
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Optimized ${file}`);
    }
  }
}
