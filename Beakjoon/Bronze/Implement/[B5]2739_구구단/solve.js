const fs = require('fs')

// const Num = fs.readFileSync("inputFile.txt").toString().trim()
const Num = fs.readFileSync("/dev/stdin").toString().trim()

for (i = 1; i < 10; i++) {
    // console.log(i)
    console.log(Num, "*", i ,"=", Num * i)
}
