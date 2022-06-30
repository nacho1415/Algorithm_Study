let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [n, ...items] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);

i = 1
items.unshift(0)
g = [0, 0]
h = [0, items[1]]
for(i=2; i<=n; i++){
    g.push(h[i-1]+items[i])
    h.push(Math.max(h[i-2],g[i-2])+items[i])
}
console.log(Math.max(h[n], g[n]))

/* 
    0   10   20   15   25   10   20
    
    0   0    30   35   50   65   65      
    0   10   20   25   55   45   75
    
    
*/