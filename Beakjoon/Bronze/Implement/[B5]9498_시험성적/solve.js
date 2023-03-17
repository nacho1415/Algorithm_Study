const fs = require('fs')

// const compare = fs.readFileSync('inputFile.txt').toString().trim().split(" ").map(a => Number(a))
const compare = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(a => Number(a))

if (compare > 89) {
    console.log("A")
} else if (compare > 79) {
    console.log("B")
} else if (compare > 69) {
    console.log("C")
} else if (compare > 59) {
    console.log("D")
} else {
    console.log("F")
}
