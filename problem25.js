var bigInt = require("big-integer");
let fib = [1,1];
for(let i=2; i<5000; i++){
    let prev_first = bigInt(fib[fib.length-2]);
    let prev_second = bigInt(fib[fib.length-1]);
    let newNum = bigInt(prev_first).plus(prev_second);
    fib.push(newNum);
}

function getLength(bigNum){
    let len = 0;
    while (bigInt(bigNum).compareTo(1)>=0){
        len ++;
        bigNum=bigInt(bigNum).divide(10);
    } return len;
}
let j=4700;
while (getLength(fib[j])<1000 && j<4800){
    j++;
}
console.log(j);
