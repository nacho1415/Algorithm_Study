function solution(arr) {
  arr.sort((a, b) => b - a)
  for (i = 0; i < arr.length+1; i++) {
    if (arr[i] <= i) {
        return i
    }
    if (i == arr.length) {
      return arr.length
    }
  }
}