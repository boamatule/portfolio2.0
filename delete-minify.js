const fs = require("fs");
const glob = require("glob");
const path = require("path");

// Directory path to search for files
const directoryPath = "./src"; // Replace with your desired directory path

// Delete all files ending with ".minified.js" and ".min.js"
const filePattern = `${directoryPath}/**/*.{minified,min}.js`;
const files = glob.sync(filePattern, { nodir: true });

files.forEach(file => {
  const filePath = path.join(file);
  fs.unlinkSync(filePath); // Delete file
  console.log(`Deleted: ${filePath}`);
});

console.log("Deletion completed.");
