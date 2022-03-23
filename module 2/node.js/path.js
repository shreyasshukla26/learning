//"C:\Users\shukl\Desktop\fjp6\module 2\path.js"
//let a = require("path")
//console.log(a);
//let b= a.extname("C:\ Users\ shukl\ Desktop\fjp6\module 2\path.js");
//console.log(b);
//let c = a.basename("C:\Users\shukl\Desktop\fjp6\module 2\javascript\function.");
//console.log(c);

let path = require("path");
// console.log(path);
//console.log(path);

//let extensionName = path.extname("C:\Users\shukl\Desktop\fjp6\module 2\path.js");
//console.log(extensionName);

//let baseName = path.basename(__filename);
//console.log(baseName);

// console.log(__dirname);

//console.log(__filename);

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath,"path.js");
console.log(newFilePath);
let fs = require("fs");
// console.log(fs);
let path = require("path");

// let filePath = path.join(__dirname,"file.txt");
// // console.log(filePath);

// //C-create
// //it creates file if it does not exists else it override
// fs.writeFileSync(filePath,"Hello I am a text file ");

// //R-read
// console.log("Before update : ");
// let content = fs.readFileSync(filePath,'utf-8');
// console.log(content);

// //U-update
// fs.appendFileSync(filePath,"\nNewly added content");
// console.log("After update : ")
// console.log(fs.readFileSync(filePath,'utf-8'));

// //D-delete
// fs.unlinkSync(filePath);

//Create a directory

if(!fs.existsSync("hamariDirectory"))
    fs.mkdirSync("hamariDirectory");

//Read a directory

let folderPath = __dirname;

let contentOfFolder = fs.readdirSync(folderPath);
console.log(contentOfFolder);

//Delete a directory

fs.rmdirSync("hamariDirectory")

//copy a file 

let sourcePath = path.join(__dirname,"file.txt")
let destinationPath = path.join(__dirname,"module","file.txt")
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);