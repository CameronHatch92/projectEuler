let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let leapMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let year = 1901;
sundayCount = 0;
let day = 2;

for ( let year=1901; year<2001; year++){
    if (year%4===0){
        for (let j=0; j<leapMonth.length; j++){
            day += leapMonth[j];
            if (day%7===0){
                sundayCount++;
            }
        }
    } else {
        for (let k=0; k<month.length; k++){
            day += month[k];
            if (day%7===0){
                sundayCount++;
            }
        }

    }
}
console.log(sundayCount);