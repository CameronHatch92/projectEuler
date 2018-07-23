let factorial = 1;
var bigInt = require("big-integer");
for (let i=1; i<100; i++){
    factorial = bigInt(factorial).times(i);
}
let numStr=factorial.toString();
digitSum = 0;
for (let j=0; j<numStr.length; j++){
    digitSum += parseInt(numStr[j],10);
}
console.log(digitSum);

