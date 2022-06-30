

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let input = fs.readFileSync('inputFile.txt').toString().split('\n');
// const input = fs.readFileSync("inputFile.txt").toString().trim().split(" ");

sum = 0
for(var i = 0; i <= 4; i++) {
    if((input[0]-(3*i))%5 == 0 && input[0]-(3*i) >= 0) {
        sum += i + ((input[0]-(3*i))/5)
        console.log(sum)
        break
    }
}
if(sum == 0) {
    if(input[0]%3 == 0){
        console.log(input[0]/3)
    } else {
        console.log("-1")
    }
}