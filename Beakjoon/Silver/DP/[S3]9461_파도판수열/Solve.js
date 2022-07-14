const fs = require('fs');
// const [n, ...arr] = fs.readFileSync("inputFile.txt").toString().trim().split("\n").map(v => +v);
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);

// console.log(arr)

dp = new Array(100).fill(0)

dp[0] = 1
dp[1] = 1
dp[2] = 1
dp[3] = 2
dp[4] = 2
dp[5] = 3
function d(num) {
    // console.log(num)
    if(dp[num] != 0) {
        return dp[num]
    }
    // console.log("?", num-1,[d(1)], num-5)
    return dp[num] = d(num-1) + d(num-5)
}
d(Math.max(...arr))
for (i = 0; i < n; i++) {
    // console.log(arr[i]-1)
    console.log(d(arr[i]-1)) 
    // console.log(dp)
}
