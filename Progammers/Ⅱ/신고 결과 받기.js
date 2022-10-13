function solution(id_list, report, k) {
    resList = []
    newIdList = []
    for (i = 0; i < id_list.length; i++) {
        newIdList.push([id_list[i], 0])
        resList.push([id_list[i], 0])
    }
    // console.log(resList)
    reportList = []
    for (i = 0 ; i < report.length; i++) {
        const [reporter, reported] = report[i].split(" ")
        overLabCheck = reportList.findIndex((list) => {
            if (list[0] == reporter && list[1] == reported) {
                return true
            }
        })
        if (overLabCheck == -1) {
            reportList.push([reporter, reported])
            idx = newIdList.findIndex((nameList) => nameList[0] == reported)
            // console.log(idx)
            newIdList[idx][1] += 1
        }
    }
    // console.log(resList)
    for (i = 0 ; i < newIdList.length; i++) {3
        if (newIdList[i][1] > k-1) {
            for (j = 0 ; j < reportList.length; j++) {
                if (reportList[j][1] == newIdList[i][0]) {
                    findIdx = resList.findIndex((rList) => rList[0] == reportList[j][0])
                    resList[findIdx][1] += 1
                }

            }
        }
    }
    final = []
    for (i = 0 ; i < resList.length; i++) {
        final.push(resList[i][1])
    }
    // console.log(resList)
    return final
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2))