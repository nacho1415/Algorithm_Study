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
const [N, M] = input.shift().split(" ").map(v => +v)
// console.log(input)
// const miro = input.map(v => String(+v).split("").map(v => +v))
const miro = input.map(v => v.replace(/\s*/g, "").split("").map(v => +v))
// console.log(miro)
const visited = Array.from(Array(N), () => Array(M).fill(false))



const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]

const BFS = (i, j) => {
    const queue = new Queue();
    queue.offer([i, j])
    while (queue.size() !== 0) {
        // if (queue.size)
        now = queue.poll()
        // console.log(queue.size(), visited)
        visited[i][j] = true
        for (k = 0; k < 4; k++) {
            const x = now[0] + dx[k]
            const y = now[1] + dy[k]
            
            // console.log(miro)
            // console.log(x, y)
            if (x >= 0 && y >= 0 && x < N && y < M) {
                if (miro[x][y] != 0 && visited[x][y] == false) {
                    visited[x][y] = true
                    miro[x][y] = miro[now[0]][now[1]] + 1
                    queue.offer([x, y])
                }
            }
        }
    }
}

BFS(0, 0)
// console.log(miro)
console.log(miro[N-1][M-1])
// console.log(miro)