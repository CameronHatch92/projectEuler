function amicable(num){
    let factorSum=0
    for (let j=1; j<num; j++){
        if (num%j===0){
            factorSum+=j;
        }
    } return factorSum;
}

let amicSum= 0;
for (let k=2; k<10000; k++){
    if (amicable(amicable(k))===k && amicable(k)!=k &&amicable(k)<10000){
        amicSum += k;
    }
}
console.log(amicSum);