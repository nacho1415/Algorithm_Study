const fs = require('fs')

// const [compareA, compareB] = fs.readFileSync('inputFile.txt').toString().trim().split(" ").map(a => Number(a))
const [compareA, compareB] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(a => Number(a))

if (compareA > compareB) {
    console.log(">")
} else if(compareA < compareB) {
    console.log("<")
} else {
    console.log("==")
}