const fs = require('fs');
// let input = fs.readFileSync("inputFile.txt").toString().trim();
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = Number(input)
const dp = new Array(input+1).fill(0)

dp[1] = 1
dp[2] = 3

for (i = 3; i <= input; i++) {
    dp[i] = (dp[i-1] + dp[i-2] + dp[i-2]) % 10007
}
// console.log(input)
console.log(dp[input])
// console.log(dp)