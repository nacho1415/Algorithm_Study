
// const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
n = input[0]
input.shift()
items = []
for (i = 0; i < n; i++) {
    items.push(input[i].split(" ").map(v => +v))
}
dp = []
// for (i = 0; i < n; i++) {
//     dp.push(new Array(Number(n)).fill(0))
// }
// dp[0][0] = Number(input[0])
// console.log(items)
// // console.log(dp)
// console.log(items[1][0])
for (i = 1; i < n; i++) {
    for (j = 1; j < i; j++) {
        items[i][j] = Math.max(items[i-1][j-1], items[i-1][j]) + items[i][j]
        
    }
    items[i][0] += items[i-1][0] 
    items[i][j] += items[i-1][j-1]
}
// console.log(Math.max(items[1][0], NaN), "Asdad")
// console.log(Math.max(items[1][1], items[1][1]))
console.log(Math.max(...items[n-1]))