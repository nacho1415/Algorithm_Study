const fs = require('fs')
// const input = fs.readFileSync('./inputFile.txt').toString().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().split("\n")

const [N, M] = input.shift().split(" ").map(v => +v)

notistenList = {}

for (i = 0 ; i < N; i++) {
    const who = input.shift().replace(/\s*/g, "");
    notistenList[who] = 1
}

cnt = 0
const resList = []
for (i = 0; i < M; i++) {
    const who = input.shift().replace(/\s*/g, "");
    if (who in notistenList) {
        cnt +=1
        resList.push(who)
    }
}

console.log(cnt)
resList.sort()
for (i = 0; i < resList.length; i++) {
    console.log(resList[i])
}

// console.log(notistenList)