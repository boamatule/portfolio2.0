const fs = require('fs');
const path = require('path');
const { minify } = require('uglify-js');
const glob = require('glob');

// Set the directory where the minimized JavaScript files will be saved
const outputDir = 'dist';

// Use glob to find all JavaScript and TypeScript files in the src directory and its subdirectories
glob('src/**/*.js', {}, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // Also find TypeScript files
  glob('src/**/*.ts', {}, (err, tsFiles) => {
    if (err) {
      console.error(err);
      return;
    }

    // Combine JavaScript and TypeScript files
    files = files.concat(tsFiles);

    // Minimize each JavaScript and TypeScript file and write the minimized version to a new file in the output directory
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
});
