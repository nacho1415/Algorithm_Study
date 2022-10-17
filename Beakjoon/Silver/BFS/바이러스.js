const fs = require('fs')

// const input = fs.readFileSync('./inputFile.txt').toString().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().split("\n")


class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    
    size() {
        if (this.storage[this.rear] === undefined) {
        return 0;
        } else {
        return this.rear - this.rear + 1;
        }
    }
    
    offer(value) {
        if (this.size() === 0) {
            this.storage['0'] = value;
        } else {
            this.rear += 1;
            this.storage[this.rear] = value;
        }
    }
    
    poll() {
        let temp;
        if (this.front === this.rear) {
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front = 0;
            this.rear = 0;
        } else {
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front += 1;
        }
        return temp;
    }
}

const N = Number(input.shift())
const M = Number(input.shift())
const virusList = input.map(v => v.split(" ").map(v => +v))
// console.log(virusList)
cnt = 1

res_List = []

const BFS = () => {
    const queue = new Queue();
    queue.offer(1)
    res_List.push(1)
    while (queue.size() !== 0) {
        
        now = queue.poll()
        for (i = 0 ; i < virusList.length; i++) {
            if (virusList[i][0] == now && res_List.findIndex((v) => v == virusList[i][1]) == -1) {
                queue.offer(virusList[i][1])
                res_List.push(virusList[i][1])
                cnt +=1
            }
            if (virusList[i][1] == now && res_List.findIndex((v) => v == virusList[i][0]) == -1) {
                queue.offer(virusList[i][0])
                res_List.push(virusList[i][0])
                cnt +=1
            }
        }
    }
    console.log(cnt-1)
    // console.log(res_List)
}

firstIndex = virusList.findIndex((v) => v[0] == 1)

BFS(1)
