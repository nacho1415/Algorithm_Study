const fs = require('fs');

// const [n, ...items] = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const [n, ...items] = fs.readFileSync("inputFile.txt").toString().trim().split("\n")

const input = items.map(i => i.split(' ').map(i => Number(i)));
// console.log(input);

// console.log(input[0][0])
for(i =1; i<= n-1; i++ ) {
    input[i][0] = Math.min(input[i-1][1], input[i-1][2]) + input[i][0]
    input[i][1] = Math.min(input[i-1][0], input[i-1][2]) + input[i][1]
    input[i][2] = Math.min(input[i-1][0], input[i-1][1]) + input[i][2]
}

console.log(Math.min(input[n-1][0], input[n-1][1], input[n-1][2]))