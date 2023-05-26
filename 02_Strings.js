let str1='Java';
let str2="Script";
let str3="awesome";
let result;
result="the result variable is: " + str1+str2+' '+str3;//like java
console.log(result);
//difference from jaba: backticks for variable insertion
result=`the result variable is: ${str1}${str2} ${str3}`
console.log(result);
//constant variables
const number=35;
//you can't reassign a constant number
//number=45;
console.log(number);