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

var a = [3,4,3,1,3,2,5]

{
    "3":3,
    "4":1,
    "1":1,
    "2":1,
    "5":1
}
