const fs = require('fs');
// let input = fs.readFileSync("./inputFile.txt").toString().trim().split('');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('');

if (!input.includes('0')) {
    console.log("-1")
} else {
    input = input.map(v => +v)
    item = input.reduce((a, b) => (a+b));
    if (item % 3 == 0) {
        console.log(input.sort((a,b) => b - a).map(v => String(v)).join(""))
    } else {
        console.log("-1")
    }
}