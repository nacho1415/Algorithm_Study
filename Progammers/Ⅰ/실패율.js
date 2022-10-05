function solution(N, stages) {
  failRound = new Array(N+1).fill(0)
  passRound = new Array(N+1).fill(0)
  for (i = 0; i < stages.length; i++) {
      for(j = 0; j < stages[i]; j++) { 
        if (j == stages[i]-1) {
          failRound[j] += 1
        } else {
          passRound[j] +=1    
        }
      } 
      // console.log(stages[i], passRound)
      // console.log(stages[i], failRound)
      // console.log("-----------------")
    }
  // console.log(passRound),
  // console.log(failRound)
  res = []
  totalRound = []
  for (i = 0 ; i < passRound.length-1; i++) {
    totalRound.push(failRound[i]+passRound[i])
  }

  // console.log(failRound)
  // console.log(totalRound)
  for (i = 0 ; i < passRound.length-1; i++) {
    // if (failRound[i] == 0) {
    //   res.push('2')
    // } else {

      res.push(Number(failRound[i]/totalRound[i]))
    // }
  }
  // console.log(res)
  const obj = Object.assign({}, res);
  let entries = Object.entries(obj);
  let sorted = entries.sort((a, b) => b[1] - a[1]);
  realRes = []
  sorted.map(a => realRes.push(Number(a[0])+1))
  return realRes
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))