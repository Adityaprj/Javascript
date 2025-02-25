console.log("hello world!");
console.info("hello world!");
console.warn("hello world!");
console.error("hello world!");
// group
console.group("pehla dein");
console.log("das");
console.log("s");
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