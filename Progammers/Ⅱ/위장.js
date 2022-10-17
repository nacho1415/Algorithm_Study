function factorial(factor) {
    // console.log(factor)
    if (factor == 0) {
        return 0
    }

    if (factor == 1) {
        return 1
    } 

    return factor * factorial(factor - 1)
}

function solution(clothes) {
    clothesType = []
    for (i = 0; i < clothes.length; i++) {
        // console.log(clothesType.findIndex((v) => console.log(v[0][0])), "??")
        const checkAlreadyExisted = clothesType.findIndex((v) => v[0] == clothes[i][1])
        if (checkAlreadyExisted != -1) {
            clothesType[checkAlreadyExisted][1] += 1
        } else {
            clothesType.push([clothes[i][1], 1])
        }
    }

    sum = 1

    for (i = 0 ; i < clothesType.length; i++) {
        let oneSelect = factorial(clothesType[i][1]) / factorial(clothesType[i][1] - 1)
        const zeroSelect = 1
        if (oneSelect == Infinity) {
            oneSelect = 1
        }
        // console.log("Check", oneSelect, zeroSelect)
        sum *= oneSelect + zeroSelect
    }


    return sum -1
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
// console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))