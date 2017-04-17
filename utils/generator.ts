import * as fs from 'fs';
import {
  extra
} from '../src/langs';
import themes from '../src/themes';
import plugins from '../src/plugins';

function getPrism() {
  let result = `import * as Prism from 'prismjs';\n`;

  extra.forEach((lang) => {
    const imp = `import 'prismjs/components/prism-${lang}';\n`;
    result += imp;
  });

  Object
    .keys(plugins)
    .forEach((plugin) => {
      const imp = `import 'prismjs/plugins/${plugin}/prism-${plugin}';\n`;
      result += imp;
    });

  result += `export default Prism;\n`;
  return result;
}

function getStyles() {
  let result = `@mixin common {}`;

  Object
    .keys(themes)
    .forEach((theme) => {
      const tail = `
.prism-${theme} {
  @import "./node_modules/prismjs/themes/${themes[theme]}";
  @include common;
}`;
      result += tail;
    });

  Object
    .keys(plugins)
    .filter((plugin) => plugins[plugin])
    .forEach((plugin) => {
      const imp = `
.prism-${plugin} {
  @import "./node_modules/prismjs/plugins/${plugin}/prism-${plugin}";
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

exMakeDir('lib')
fs.writeFileSync('./lib/index.scss', getStyles(), 'utf8');
fs.writeFileSync('./src/prism.ts', getPrism(), 'utf8');
