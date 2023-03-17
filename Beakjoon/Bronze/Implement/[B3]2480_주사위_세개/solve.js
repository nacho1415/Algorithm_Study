const fs = require('fs')

//현재 시간 == now, 추가될 시간 == plus
// const [compareA, compareB, compareC] = fs.readFileSync('inputFile.txt').toString().trim().split(" ").map(a => Number(a))
const [compareA, compareB, compareC] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(a => Number(a))

let res

// console.log(compareA, compareB, compareC)
if (compareA == compareB && compareB == compareC) {
    res = compareA * 1000 + 10000
} else if (compareA == compareB || compareB == compareC){
    res = compareB * 100 + 1000
} else if (compareC == compareA) {
    res = compareC * 100 + 1000
} else {
    let max = -123124
    if (max < compareA) {
        max = compareA
    }
    // console.log(max, compareA)
    if (max < compareB) {
        max = compareB
    }
    if (max < compareC) {
        max = compareC
    }
    res = max * 100
}

console.log(res)