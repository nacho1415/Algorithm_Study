let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// let input = fs.readFileSync('inputFile.txt').toString().split('\n');
// const input = fs.readFileSync("inputFile.txt").toString().trim().split(" ");

testvalue = Number(input[0])
sum = 0

const dp = new Array(testvalue+1).fill(0);
for(i=2; i<=testvalue; i++) {
    dp[i] = dp[i-1] +1
    if(i % 3 == 0) {
        dp[i] = Math.min(dp[i], dp[i/3]+1)
    }
    if(i % 2 == 0) {
        dp[i] = Math.min(dp[i], dp[i/2]+1)
    }
}
console.log(dp[testvalue])