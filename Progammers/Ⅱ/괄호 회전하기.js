function solve(arr) {
  // console.log(arr)
  arr = arr.split("")
  cntLarge = 0
  cntMiddle = 0
  cntSmall = 0
  sum = 0
  last = []
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "[") {
      cntLarge += 1
      sum +=1
      last.push("[")
    } else if (arr[i] == "]" && last[last.length-1] == "[") {
      cntLarge -= 1
      last.pop()
    } else if (arr[i] == "{") {
      cntMiddle += 1
      sum += 1 
      last.push("{")
    } else if (arr[i] == "}" && last[last.length-1] == "{") {
      cntMiddle -= 1
      last.pop()
    } else if (arr[i] == "(") {
      cntSmall += 1
      sum +=1
      last.push("(")
    } else if (arr[i] == ")" && last[last.length-1] == "(") {
      cntSmall -= 1
      last.pop()
    } else {
      // console.log(i, last, "??",arr[i])
      return 0
    }
    if (cntSmall < 0 || cntMiddle < 0 || cntLarge < 0) {
      return 0
    }
  }
  if (cntSmall == 0 && cntMiddle == 0 && cntLarge == 0) {
    // console.log(i, last)
    return sum
  } else {
    return 0
  }
}
cnt = 0
function solution(arr) {
  res = 0
  for (k = 0; k < arr.length; k++) {
    // if (cnt == 5) {
    //   break
    // }
    cnt +=1
    tempArray = arr.slice()
    // console.log(arr, k)
    tempArray = tempArray.split("")
    temp = tempArray.splice(0, k)
    tempArray = tempArray.concat(temp).join("")
    // console.log(tempArray)
    if (solve(tempArray) != 0) {
      res +=1
      // console.log(res)
    }
  }
  return res
}

console.log(solution("}]()[{"))