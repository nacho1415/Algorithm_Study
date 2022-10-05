function solution(nums) {
  res = 0
  for (i = 0 ; i < nums.length; i++) {
      for (j = i+1; j < nums.length; j++) {
          for (k = j+1; k < nums.length; k++) {
              cur = nums[i] + nums[j] + nums[k]
              cnt = 2
              while (cnt <= parseInt(cur/2)) {
                  if (cur % cnt == 0) {
                      console.log(i, j, k, cur)
                      break
                  }
                  cnt +=1
              }
              if (cur % cnt != 0) {
                  res +=1
              }
          }
      }
  }
  return res
}