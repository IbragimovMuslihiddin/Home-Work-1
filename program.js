
function subtractNum (number){
    if (number > 0){
        return number - 2
    }
    else if (number < 0){
        return number + 1
    }
    else {
        return "10"
    }
}
console.log(subtractNum(3));
console.log(subtractNum(0));
console.log(subtractNum(10));

function nextEvenandPrev (number){
    return number - 2 + (number % 2);
}
console.log(nextEvenandPrev(5));
console.log(nextEvenandPrev(4));



function gcd(a, b) {
    while (b != 0) {
        let sum = b;
        b = a % b;
        a = sum;
    }
    return a;
}
console.log(gcd(4,6));
console.log(gcd(3,8));
console.log(gcd(2,6));

function countPies(num1, num2, num3, num4) {
    let sum1 = num1 * 100 + num2;
    let sum2 = num3 * 100 + num4;
    return Math.floor(sum2 / sum1);
}
console.log(countPies(1,70,3,80));

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    return sum == num;
}
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(32));
console.log(isPerfectNumber(496));

 
function factorial (n){
    let result = 1;
    for(let i= 2; i <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(4));

function sumOfPrimesInRange(num1, num2){
    let cnt = 0;
    for(let i = num1; i <= num2; i++){
        if (isPrime(i)){
            cnt += i;
        }
    }
    return cnt;
}
console.log(sumOfPrimesInRange(10,50));

function isPrime(num){
    for(let i = 2; i < num; i++){
        if (num % i == 0){
        return false;
    }
    }
    return true;
}

function hasUniqueDigits (num){
    for(let i = num; i > 0; i = Math.floor(i / 10)){     
        for(let j = i; j > 0; j = Math.floor(j / 10)){
            if(i % 10 == j % 10){
                return false;
            }
        }
    }
    return true;
}
console.log(hasUniqueDigits(1234));
console.log(hasUniqueDigits(2211));

let solve = (num, answer) => {
    for(let i = 0; i <= answer; i++){
        if(Math.pow(num, 1) == answer){
            return i;
        }
    }
    return null;
}
console.log(solve(7, 1024));

