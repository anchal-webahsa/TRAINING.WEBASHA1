const fs = require('fs');
const path = require('path');

const headerPath = path.join(__dirname, 'webasha-react', 'src', 'components', 'layout', 'Header.jsx');
let content = fs.readFileSync(headerPath, 'utf8');

// Replace all instances of ` scrollbar-inner` (and variants) with empty string
content = content.replace(/ scrollbar-inner/g, '');

fs.writeFileSync(headerPath, content);
console.log('Removed scrollbar-inner from Header.jsx');
