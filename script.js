// for printing hello by ,multiple method.
console.log("hello world!");
console.info("hello world!");
console.warn("hello world!");
console.error("hello world!");
// group
console.group("pehla dein");
    console.log("das");
    console.log("s");
    console.groupEnd();

console.groupCollapsed("github data");
    console.log("add");
    console.log("commit");
    console.log("push");
    console.log("code pushed to github");
    console.groupEnd();

// for swap values
var a=1;
var b=2;
var c;

c=a;
a=b;
b=c;
console.log(a,b);
// by destructuring

var a=1;
var b=2;
var c;
[a,b]=[b,a];
console.log(a,b);

// by addition and subtraction

var a=11;
var b=12;
a+=b;
b=a-b;
a=a-b;
console.log(a,b);

// decalring a const and modifying its properties

const person = {
    name: "sam",
    age: 21
};
person.name = "john";
console.log(person);
// we can update the value of const but can not change the value of const.
// values are cannot be set again.
// and if we want to make its value unchangeble then we can use Object.freeze() method.

// convert string to number 
Number("50")
parseInt("50")
+50

// find anything without using includes

let str = "tmkc";

if (str.indexOf("m") !== -1){
    console.log("found");
}
else{
    console.log("not found");
}

// also you can put .search in place of indexOf
// ===(equal)  !==(not equal)  ==(equal)  !=(not equal)

// difference between undefined and null,NaN
var a; // undefined
var b = 0/0; // NaN
var c = null; // null
console.log(a,b,c);

// check which element is comes frequently

let a = [3,4,3,1,3,2,5]
var obj = {};
var max = 0;
var maxElement;
for (let i of a){
    if (obj[i]){
        obj[i]++;
    }
    else{
        obj[i] = 1;
    }
    if (obj[i] > max){
        max = obj[i];
        maxElement = i;
    }
}
console.log(maxElement);

// check if a number is prime or not
let n = 10;
let isPrime = true;
if (n <= 1){
    isPrime = false;
}
else if (n === 2){
    isPrime = true;
}
else if (n % 2 === 0){
    isPrime = false;
}
else{
    for (let i = 3; i <= Math.sqrt(n); i+=2){
        if (n % i === 0){
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime);


// check if a number is palindrome or not
let f = 12321;
let rev = 0;
let temp = n;
while (temp > 0){
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = parseInt(temp / 10);
}
if (rev === f){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}       
// find the sum of all prime numbers between 1 and q


let q = 10;
let sum = 0;    
for (let i = 2; i <= q; i++){
    let isPrime = true;
    if (i <= 1){
        isPrime = false;
    }
    else if (i === 2){
        isPrime = true;
    }
    else if (i % 2 === 0){
        isPrime = false;
    }
    else{
        for (let j = 3; j <= Math.sqrt(i); j+=2){
            if (i % j === 0){
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime === true){
        sum += i;
    }
}

