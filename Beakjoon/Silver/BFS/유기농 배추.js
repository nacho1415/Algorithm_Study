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

const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]





const fs = require('fs')

// const input = fs.readFileSync('./inputFile.txt').toString().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().split("\n")

const N = Number(input.shift())
for (i = 0 ; i < N ; i++) {
    const [col, row, total] = input.shift().split(" ").map(v => +v)
    const visited = Array.from(Array(col), () => Array(row).fill(false))
    const board = Array.from(Array(col), () => Array(row).fill(0))
    const temp = input.splice(0, total)
    // console.table(visited)
    cnt = 0
    // console.log(temp)

    for (j = 0; j < temp.length; j++) {
        const [r, c] = temp[j].split(" ").map(v => +v)
        board[r][c] = 1
    }
    // console.table(board)
    // console.log("dasdasd")
    for (j = 0 ; j < col; j++) {
        for (k = 0 ; k < row; k++) {
            // console.log(i, j)
            if (board[j][k] == 1 && visited[j][k] == false) {
                // console.table(visited)
                // console.log("?????")
                const BFS = (i, j) => {
                    const queue = new Queue();
                    queue.offer([i, j])
                    cnt +=1
                    // console.table(visited)
                    while(queue.size() != 0) {
                        const [ro, co] = queue.poll()
                        
                        
                        for (l = 0 ; l < 4; l++) {
                            const x = ro + dx[l]
                            const y = co + dy[l]
                            if (x >= 0 && y >= 0 && x < col && y < row) {
                                // console.log(board[x][y], visited[x][y])
                                // console.table(visited)
                                // console.log(j, k, cnt)
                                if (board[x][y] == 1 && visited[x][y] == false) {
                                    queue.offer([x, y])
                                    visited[x][y] = true
                                    // console.log("???")
                                }
                            }                 
                        }
                    }
                }
                BFS(j, k)
            }
        }
    }
    
    console.log(cnt)
}
