let cp =  require('child_process');
 //console.log(cp);

//open calculator with the help of this file

// for windows replace gnome-calculator with calc
//for mac replace gnome-calculator with open -a Calculator

//cp.execSync("calc");
//open vscode with childProcess

 //cp.execSync("code");

 let a = cp.execSync("node test.js");

console.log("this is from file test :"  +a);