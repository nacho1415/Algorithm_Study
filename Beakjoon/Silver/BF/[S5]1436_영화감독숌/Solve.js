const fs = require('fs');
input = fs.readFileSync("dev/stdin").toString().trim();
// console.log(typeof(input))
input = +input
count = 0
s = '666'
i = 0
while (true) {
    if (String(i).includes(s)) {
        count += 1
        if (count == input) {
            break
        }
    }
    i += 1
}
console.log(i)