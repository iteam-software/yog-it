// setup-deploy assumes you have already build the project with npm run build.

'use strict';

const fs = require('fs');
const pkg = require('../package.json');

let promise = Promise.resolve();

promise = promise.then(() => {
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.module;

  pkg.main = 'index.js';

  fs.writeFileSync(
    'dist/package.json',
    JSON.stringify(pkg, null, '  '),
    'utf-8');

  fs.writeFileSync(
    'dist/LICENSE',
    fs.readFileSync('LICENSE', 'utf-8'),
    'utf-8'
  );

  fs.writeFileSync(
    'dist/README.md',
    fs.readFileSync('README.md', 'utf-8'),
    'utf-8'
  );
});

promise.catch((err) => console.error(err));
