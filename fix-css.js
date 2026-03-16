const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'webasha-react', 'public', 'assets', 'css', 'app.min.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Fix color-adjust by removing it (keep print-color-adjust)
css = css.replace(/color-adjust:\s*exact;/g, '');

// 2. Fix `-webkit-appearance` without standard `appearance`
// Add appearance:button after -webkit-appearance:button
css = css.replace(/-webkit-appearance:\s*button(?![\s\S]*?appearance:\s*button)/g, '-webkit-appearance:button;appearance:button');

// Add appearance:textfield after -webkit-appearance:textfield
css = css.replace(/-webkit-appearance:\s*textfield(?![\s\S]*?appearance:\s*textfield)/g, '-webkit-appearance:textfield;appearance:textfield');

// Add appearance:none after -webkit-appearance:none
css = css.replace(/-webkit-appearance:\s*none(?![\s\S]*?appearance:\s*none)/g, '-webkit-appearance:none;appearance:none');

// 3. Fix line-clamp (line 1835)
// It was: -webkit-line-clamp: 3;
// Replace with: -webkit-line-clamp: 3; line-clamp: 3;
css = css.replace(/-webkit-line-clamp:\s*3;/g, '-webkit-line-clamp: 3; line-clamp: 3;');

fs.writeFileSync(cssPath, css);
console.log('Fixed CSS lints.');
