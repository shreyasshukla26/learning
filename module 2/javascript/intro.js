console.log("hey sup budyyy!!!!!")   // print in js
let a = 500 ;   // print varibale in js 
console.log(a); // str print 
let xo = 'i am a string'; 
console.log(xo);


// loops 
//while loop 
let count = 10;
while(count>0){
    console.log(count);
    count--;
}
//for loop
for (let i =1; i <=5;i++){
    console.log(i);
}
//is prime 
let n = 34935;
let isPrime = true;

for(let i=2;i*i<=n;i++){
    if(n%i == 0){
        isPrime = false;
    }
}
if(isPrime == true){
    console.log("Number is prime");
}else{
    console.log("Number is not prime");
}