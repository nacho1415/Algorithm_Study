const fs = require('fs');
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());
// const input = Number(fs.readFileSync("./inputFile.txt").toString().trim());
res = 0
i = 1
while (true) {
    
    res +=i
    // console.log(i, res)
    if (res >= input) {
        if (res == input) {
            break
        } else {
            i -=1
            break
        }
    }
    i++
}
console.log(i)