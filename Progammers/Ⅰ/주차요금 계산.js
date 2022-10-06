function solution(fees, records) {
  parkIn = []
  timelabseList = []
  for (i = 0; i < records.length; i++) {
    const [time, identification, sign] = records[i].split(" ")
    // console.log(time, identification, sign)
    if (sign == "IN") {
        parkIn.push([identification, time])
    } else {
        const parkedIdx = parkIn.findIndex(a => a[0] == identification)
        const startTime = parkIn[parkedIdx][1]
        // console.log(startTime)
        const [startHour, startMinute] = startTime.split(":").map(v => +v)
        const [endHour, endMinute] = time.split(":").map(v => +v)
        // console.log(endHour, endMinute, startHour, startMinute)
        const timeLabse = ((endHour - startHour) * 60) + (endMinute - startMinute)
        // console.log("check", parkedIdx)
        parkIn.splice(parkedIdx, 1)
        findIdx = timelabseList.findIndex(a => a[0] == identification)
        if (findIdx != -1) {
          timelabseList[findIdx][1] += timeLabse
        } else {   
          timelabseList.push([identification, timeLabse])
        }
    }
    // console.log(i, parkIn, "???")
  }
  for (i = 0; i < parkIn.length; i++) {
    findIdx = timelabseList.findIndex(a => a[0] == parkIn[i][0])
    const [startHour, startMinute] = parkIn[i][1].split(":").map(v => +v)
    // console.log(parkIn[i][0])
    // console.log(startHour, startMinute)
    const timeLabse = ((23 - startHour) * 60) + (59 - startMinute)
    if (findIdx != -1) {
      timelabseList[findIdx][1] += timeLabse

    } else {
      timelabseList.push([parkIn[i][0], timeLabse])
    }
  }
  timelabseList.sort((a, b) => a[0] - b[0])
  // console.log(timelabseList)
  res = []
  for (i = 0; i < timelabseList.length; i++) {
    // console.log(i, timelabseList[i][1], fees[0], "????DAS")
    if (timelabseList[i][1] > fees[0]) {
      // console.log()
      res.push((Math.ceil((timelabseList[i][1]- fees[0]) / fees[2] ) * fees[3])+ fees[1])
    } else {
      res.push(fees[1])
    }
  }
  return res
}

console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))
// console.log(solution([120, 0, 60, 591], ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"]))