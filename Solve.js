function solution(str1, str2) {
  str_array = []
  str2_array = []
  pattern = /[a-zA-Z]/
  str1 = str1.toUpperCase()
  str2 = str2.toUpperCase()

  for (i = 0 ; i < str1.length-1; i++) {
    if (pattern.test(str1[i]) && pattern.test(str1[i+1])) {
      str_array.push(str1[i]+str1[i+1])
    }
  }
  for (i = 0 ; i < str2.length-1; i++) {
    if (pattern.test(str2[i]) && pattern.test(str2[i+1])) {
      str2_array.push(str2[i]+str2[i+1])
    }
  }
  // console.log(str_array)
  // console.log(str2_array)
  len = str_array.length + str2_array.length
  same = 0
  for (i = 0; i < str_array.length; i++) {
    check = str2_array.indexOf(str_array[i])
    if (check != -1) {
      str2_array.splice(check, 1)
      len -=1
      same +=1
    }
  }
  // console.log(len, str_array)
  // console.log(same, str2_array)
  if (str_array.length == 0 && str2_array.length == 0) {
    return 	65536
  }
  
  return Math.floor((same/len) * 65536) % 100000
}

// console.log("%#^@%&13dasd22".split("").filter(a => /[a-zA-Z]/.test(a)))
// console.log(solution("E=M*C^2", "e=m*c^2"))
console.log(solution("FRANCE", "french"))
// console.log(solution("handshake", "shake hands"))