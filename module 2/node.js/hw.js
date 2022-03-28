let fs = require("fs");
let path = require("path");
fs.existsSync("my directory2")
//read 
let folderPath = __dirname;
let content = fs.readdirSync(folderPath);
console.log(content);