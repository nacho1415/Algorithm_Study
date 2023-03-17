const fs = require('fs')

const [hour, minute] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(a => Number(a))
// const [hour, minute] = fs.readFileSync('inputFile.txt').toString().trim().split(" ").map(a => Number(a))

let answerHour, answerMinute
if (minute >= 45) {
    answerHour = hour
    answerMinute = minute-45
} else if (hour == 0) {
    answerHour = 23
    answerMinute = 60-(45-minute)
} else {
    answerHour = hour-1
    answerMinute = 60-(45-minute)
}

if (answerHour != '0') {
    String(answerHour).replace(/(^0+)/, "")
}

if (answerMinute != '0') {
    String(answerMinute).replace(/(^0+)/, "")
}

console.log(answerHour, answerMinute)
