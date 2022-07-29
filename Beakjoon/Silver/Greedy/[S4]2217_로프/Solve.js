const fs = require('fs');
// let [n, ...arr] = fs.readFileSync("./inputFile.txt").toString().trim().split("\n");
let [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
arr = arr.map(v => +(v.replace(/\n|\r|\s*/g, "")))
arr.sort(function(a, b)  {
    return b - a;
});
// console.log(arr)

res = arr[0]
temp = 0
for (i = 0; i< n; i++) {
    // console.log(res, i, arr[i])
    if (res < arr[i]*(i+1)) {
        res = arr[i]*(i+1)
    }
}
console.log(res)