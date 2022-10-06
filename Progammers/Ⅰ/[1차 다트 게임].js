function solution(dartResult) {
    valueList = []
    res = 0
    for (i = 0 ; i < dartResult.length; i++) {
    switch (dartResult[i]) {
            case 'S':
                valueList[valueList.length-1] = valueList[valueList.length-1] * 1
                break
            case 'D':
                valueList[valueList.length-1] = valueList[valueList.length-1] ** 2
                break
            case 'T':
                valueList[valueList.length-1] = valueList[valueList.length-1] ** 3
                break
            case '*':
                if (valueList.length > 1) {
                    valueList[valueList.length-1] *= 2
                    valueList[valueList.length-2] *= 2
                } else {
                    valueList[valueList.length-1] = valueList[valueList.length-1] * 2
                }
                break
            case '#':
                valueList[valueList.length-1] *= -1
                break
            default:
                if (isNaN(dartResult[i-1]) == true) {
                    valueList.push(Number(dartResult[i]))
                } else {
                    valueList[valueList.length-1] = String(valueList[valueList.length -1]) + dartResult[i]
                }
        }
        
        // console.log(dartResult[i], valueList, )
    }
    return valueList.reduce((a, c) => a + c)
}
// console.log(solution('1S2D*3T'))
console.log(solution('1D2S#10S'))
// console.log(solution('1D2S0T'))
// console.log(solution('1S*2T*3S'))
// console.log(solution('1D#2S*3S'))
// console.log(solution('1T2D3D#'))
// console.log(solution('1D2S3T*'))