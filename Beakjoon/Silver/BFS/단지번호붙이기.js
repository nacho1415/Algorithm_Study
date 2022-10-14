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
const board = input.map(v => v.replace(/\s*/g, "").split("").map(v => +v))
const visited = Array.from(Array(N), () => Array(N).fill(false))

// console.table(board)
// console.table(visited)
const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]

let cnt = 0 
const resValue = []

const BFS = () => {
    for (i = 0 ; i < N; i++) {
        for (j = 0 ; j < N; j ++) {
            if (board[i][j] == 1 && !visited[i][j]) {
                const quque = new Queue();
                quque.offer([i, j])
                cnt +=1
                cntBuilt = 1 
                while (quque.size() !== 0) {
                    now = quque.poll()
                    visited[i][j] = true
                    for (k = 0; k < 4; k++) {
                        const x = now[0] + dx[k]
                        const y = now[1] + dy[k]
                        if (x >= 0 && y >= 0 && x < N && y < N ) {
                            if (!visited[x][y] && board[x][y] == 1) {
                                visited[x][y] = true
                                quque.offer([x, y])
                                cntBuilt +=1
                            }
                        }
                    }
                }
                resValue.push(cntBuilt)
            }
        }
    }
}

BFS()
console.log(cnt)
resValue.sort((a, b) => a - b)
resValue.map(v => console.log(v))