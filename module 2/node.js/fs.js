let fs = require("fs");
//console.log(fs);
let path = require("path");
let filepath = path.join(__dirname,"text.txt")
console.log(filepath);
fs.writeFileSync(filepath," this is  the text file created");
let read = fs.readFileSync(filepath,"utf-8");
console.log(read);