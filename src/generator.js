import fs from 'fs';
import langs from './langs';
import themes from './themes';

function getPrism() {
  let result = `import Prism from 'prismjs';\n`;

  langs.forEach(function(lang) {
    let imp = `import 'prismjs/components/prism-${lang}';\n`;
    result += imp;
  });

  result += `export default Prism;\n`;
  return result;
}

function getStyles() {
  let result = `@mixin common {}`;

  themes.forEach(function (theme) {
    let tail = `
.${theme} {
  @import "~prismjs/themes/${theme}";
  @include common;
}`;
    result += tail;
  });

  return result;
}

function exMakeDir(dirname) {
  try {
    fs.mkdirSync(dirname);
  } catch(err) {
    if (err.code === 'EEXIST') {
      console.log(`folder '${dirname}' already exists.`);
    }
    else {
      throw err;
    }
  }
}

exMakeDir('styles');
exMakeDir('lib');
fs.writeFileSync('./src/prism.js', getPrism(), 'utf8');
fs.writeFileSync('./styles/index.scss', getStyles(), 'utf8');