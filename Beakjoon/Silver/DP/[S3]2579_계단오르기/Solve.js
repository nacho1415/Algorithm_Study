let fs = require('fs');
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