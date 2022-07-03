const fs = require('fs');

const [n, ...arr] = fs.readFileSync("inputFile.txt").toString().trim().split("\n");

// const [n, ...items] = fs.readFileSync("inputFile.txt").toString().trim().split("\n")
// console.log(arr)
const input = arr.map(v => +v)
const dp = new Array(100).fill(-2)
// console.log(d)
const temp = Math.max(...input)
function fib(n) {
    if(n == 0) {
        return 0
    }
    if(n == 1) {
        return 1
    }
    if(dp[n] != -2) {
        return dp[n]
    }
    return dp[n] = fib(n-1) + fib(n-2)
}

for(var i = 0; i < n; i ++) {
    if(input[i] == 0) {
        console.log("1 0")
    }else {
        console.log(fib(input[i]-1), fib(input[i]))
    }
}