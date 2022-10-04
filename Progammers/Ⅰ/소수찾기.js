function solution(n) {
  board = new Array(n+1).fill(0)
  for (i = 2; i < n+1; i++) {
      cnt = 1
      while (i * cnt <= n) {
          board[i * cnt] += 1
          cnt +=1
     }
  }
  sum = 0
  for (i = 2; i < n+1; i++) {
      if (board[i] == 1) {
          sum +=1
      }
  }
  console.log(board)
  
  return sum
}