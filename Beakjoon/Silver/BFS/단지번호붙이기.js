const fs = require('fs')

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

// const input = fs.readFileSync('./inputFile.txt').toString().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().split("\n")
const N = Number(input.shift())
input.shift()
const board = input.map(v => v.replace(/\s*/g, "").split(""))
const visited = Array(N).fill(false)

console.table(board)
console.table(visited)
const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]

let cnt = 0 
const resValue = []

const BFS = () => {

}

BFS()