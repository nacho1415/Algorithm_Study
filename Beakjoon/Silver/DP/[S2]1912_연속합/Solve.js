const fs = require('fs');

const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);

// const [n, ...arr] = fs.readFileSync("inputFile.txt").toString().trim().split(/\s/);

const input = arr.map(v => +v)
input.shift()
mx = input[0]
let cur = input[0]
for (i = 1; i < n; i++) {
    // console.log(cur, input[i], "------------")
    if(input[i] + cur > cur) { // input[i]가 양수일경우
        if(input[i] + cur < input[i]){
            cur = input[i]
    
        } else {
            cur = input[i] + cur
        }

    } else{                    // input[i]가 음수일경우
        if(input[i] > cur){
            // console.log("여기잖아", input[i])
            cur = input[i]
        } else{

            cur = input[i] + cur
        }
    }
    if(mx < cur ) {
        mx = cur
    }
}
console.log(mx)