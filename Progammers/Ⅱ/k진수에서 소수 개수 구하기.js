function solution(n, k) {
  character = n.toString(k).split("0").filter(v => v != 1)
  cnt = 0 
  for (i = 0 ; i < character.length; i++) {
    cur = character[i]
    
    // console.log(cur)
    for (j = 2; j < Math.sqrt(character[i])+3; j++) {
      // console.log(i, j, cur, cnt)
      if (cur % j == 0 && j != cur) {
        break
      }
    }
    if (cur % j != 0) {
      cnt +=1
    }
  }
  return cnt
}