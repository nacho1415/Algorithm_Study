const fs = require('fs');
// input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = fs.readFileSync('./inputFile.txt').toString().trim().split('\n');
input = input.map(v => {
    return v.split(" ").map(v => +(v))
})
const n = Number(input.shift())
for (i = 0; i < n; i++) {
    items = [] 
    m = input.shift()
    for (j = 0; j < m; j++) {
        items.push(input.splice(0, 1)[0])
    }
    items.sort((a, b) =>a[0]-b[0])
    res = 1
    rank = items[0][1]
    for (j = 1; j < m; j++) {
        if (rank > items[j][1]) {
            rank = items[j][1]
            res += 1
        }
    }
    console.log(res)
    res = 1
}