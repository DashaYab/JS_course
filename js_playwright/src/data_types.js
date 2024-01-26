var num = 42;
var str = "Hello, world!";
var bool = true;
var arr = [1, 2, 3];
var obj = { key: "value" };
var func = function() { return "I am a function"; };
var nul = null;
var undf = undefined;
var bigin = 123n;

console.log("Type of num:", typeof num);       
console.log("Type of str:", typeof str);       
console.log("Type of bool:", typeof bool);     
console.log("Type of arr:", typeof arr);       // object (arrays are objects in JavaScript)
console.log("Type of obj:", typeof obj);       
console.log("Type of obj:", typeof {});       
console.log("Type of func:", typeof func);     
console.log("Type of nul:", typeof nul);       // object (historical quirk, but typeof null is 'object')
console.log("Type of undf:", typeof undf);     
console.log("Type of symbol:",typeof Symbol('a'))   