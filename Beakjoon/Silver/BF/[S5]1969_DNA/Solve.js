const fs = require('fs');
let [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
n = n.split(" ").map(v => +v)
arr = arr.map(v => v.replace(/\n|\r|\s*/g, ""))
// console.log(n)
// console.log(arr)
res_items = []
temp = {}
// console.log(Object.keys(temp).reduce((a, b) => temp[a] > temp[b] ? a : b));
// console.log(Math.max(...temp))
// console.log(temp)
for (i = 0; i < n[1]; i++) {
    for (j = 0; j < n[0]; j++) {
        if (arr[j][i] in temp) {
            temp[arr[j][i]] += 1
        } else {
            temp[arr[j][i]] = 1
        }
        //     try {
    //         temp[arr[i][j]] += 1
    //     } catch (e) {
    //         temp[arr[i][j]] = 1
    //     }
    } 
    
    // console.log(temp)
    value = Object.keys(temp).reduce((a, b) => temp[a] > temp[b] ? a : b)
    ct = []
    // console.log(temp)
    Object.keys(temp).forEach((v) => {
        
        // console.log(temp[v], v, temp[value])
        // console.log(v.charCodeAt(0));
        if(temp[v] == temp[value]) {
            ct.push(v.charCodeAt(0))
        }
    })
    value = String.fromCharCode(Math.min(...ct))
    // console.log(value)
    res_items.push(value)
    // console.log(res_items)
    temp = {}
} 

count = 0
for (i = 0; i < n[0]; i++) {
    for (j = 0; j < n[1]; j++) {
        if (arr[i][j] != res_items[j]) {
            count += 1
        }
    }
}
console.log(res_items.join(""))
console.log(count)