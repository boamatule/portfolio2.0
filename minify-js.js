const fs = require("fs");
const UglifyJS = require("uglify-js");
const glob = require("glob");
const path = require("path");
const chalk = require("chalk");

// Get all .js files in src directory
const srcPath = "./src";
const files = glob.sync(`${srcPath}/**/*.js`, { nodir: true });

// Loop through each file and minify it
files.forEach(file => {
  const filePath = path.join(file);
  const fileContent = fs.readFileSync(filePath, "utf8");
  if (typeof fileContent === "string") { // Check if fileContent is a string
    const minifiedContent = UglifyJS.minify(fileContent).code;
    if (typeof minifiedContent === "string") { // Check if minifiedContent is a string
      fs.writeFileSync(filePath, minifiedContent, "utf8"); // Overwrite original file with minified content
      console.log(chalk.green(`Minified: ${filePath}`)); // Print in green for minified files
    } else {
      console.log(chalk.red(`Failed to minify file: ${filePath}`)); // Print in red for failed minification
    }
  } else {
    console.log(chalk.red(`Failed to read file: ${filePath}`)); // Print in red for failed file reading
  }
});

console.log(chalk.green("Minification completed.")); // Print in green for overall completion message
