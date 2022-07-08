
const fs = require('fs');
// const [n, ...arr] = fs.readFileSync("inputFile.txt").toString().trim().split("\n").map(a => +a);
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const d = new Array(Math.max(...arr)+1).fill(0)
d[1] = 1
d[2] = 2
d[3] = 4
function dp(num) {
    if (num == 1) {
        return 1
    } 
    if (num == 2) {
        return 2
    }
    if (num == 3) {
        return 4
    }
    if (d[num] != 0) {
        return d[num]
    }
    return d[num] = dp(num-1) + dp(num-2) + dp(num-3)
}
dp(10)
for (i = 0; i < n; i++) {
    console.log(d[arr[i]])
}