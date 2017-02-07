import fs from 'fs';
import { extra as langs } from './langs';
import themes, { themeMapping } from './themes';

function getPrism() {
  let result = `import Prism from 'prismjs';\n`;

  langs.forEach(function (lang) {
    const imp = `import 'prismjs/components/prism-${lang}';\n`;
    result += imp;
  });

  const plugins = [
    'line-highlight',
    'line-numbers',
    'show-invisibles',
    'file-highlight'
  ];

  plugins.forEach(function (plugin) {
    const imp = `import 'prismjs/plugins/${plugin}/prism-${plugin}';\n`;
    result += imp;
  });

  result += `export default Prism;\n`;
  return result;
}

function getStyles() {
  let result = `@mixin common {}`;

  themes.forEach(function (theme) {
    const tail = `
.prism-${theme} {
  @import "~prismjs/themes/${themeMapping[theme]}";
  @include common;
}`;
    result += tail;
  });

  const plugins = [
    'line-highlight',
    'line-numbers',
    'show-invisibles',
  ];

  plugins.forEach(function (plugin) {
    const imp = `
.prism-${plugin} {
  @import "~prismjs/plugins/${plugin}/prism-${plugin}";
}`;
    result += imp;
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