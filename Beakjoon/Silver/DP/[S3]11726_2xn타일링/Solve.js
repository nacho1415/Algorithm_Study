
let fs = require('fs');
// let n = Number(fs.readFileSync('inputFile.txt').toString().split(' '));
let n = Number(fs.readFileSync('/dev/stdin').toString().split(' '));
const d = new Array(n+1).fill(0)
d[1] = 1
d[2] = 2
function dp(num) {
    if (num == 1) {
        return
    } 
    if (num == 2) {
        return 2
    }
    if (d[num] != 0) {
        return d[num]
    }
    return d[num] = (dp(num-1) + dp(num-2))%10007
}
dp(n)
console.log(d[n])