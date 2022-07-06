const fs = require('fs');

const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);

const input = arr.map(Number);
input.shift();
const dp = new Array(Number(n)).fill(1);
cur = 0
for(i = 0; i <= n-1; i++) {
    const temp_array  = []
    cur = input[i];
    for(j=0; j <=i; j++) {
        if(cur > input[j]) {
            temp_array.push(dp[j]+1)
        }else {
            temp_array.push(1)
        }
    }
    dp[i] = Math.max(...temp_array)

}
console.log(Math.max(...dp))
