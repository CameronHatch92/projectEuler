let abundant = [];
for (let i=2; i< 28124; i++){
    let factors = 0;
    for (let j=1; j<i; j++){
        if (i%j===0){
            factors += j;
        }
    } if (factors > i){
        abundant.push(i);
    }
}

let abundantTwo = [];
for (let i=0; i<abundant.length; i++){
    for (let j=0; j<=i; j++){
        if (abundantTwo.indexOf(abundant[i]+abundant[j])===-1){
        abundantTwo.push(abundant[i]+abundant[j]);
        }
    }
}   

let sum = 0;
for (let i=1; i<28124; i++){
    if (abundantTwo.indexOf(i)===-1){
        sum += i;
    }
}
console.log(sum);