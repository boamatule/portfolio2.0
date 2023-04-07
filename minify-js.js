const fs = require('fs');
const path = require('path');
const { minify } = require('uglify-js');
const glob = require('glob');

// Set the directory where the minimized JavaScript files will be saved
const outputDir = 'dist';

// Use glob to find all JavaScript files in the src directory and its subdirectories
glob('src/**/*.js/*.ts', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // Minimize each JavaScript file and write the minimized version to a new file in the output directory
  files.forEach(file => {
    const code = fs.readFileSync(file, 'utf8');
    const result = minify(code);

    if (result.error) {
      console.error(result.error);
      return;
    }

    const outputFilePath = path.join(outputDir, `${path.parse(file).name}.min.js`);
    fs.writeFileSync(outputFilePath, result.code);
    console.log(`Minimized ${file} to ${path.basename(outputFilePath)}`);
  });
});
