
function solution(genres, plays) {
    
    genresTotalPlays = []
    
    for (i = 0 ; i < genres.length; i++) {
        const alreadyExistedCheck = genresTotalPlays.findIndex((v) => v[0] == genres[i])
        if (alreadyExistedCheck != -1) {
            genresTotalPlays[alreadyExistedCheck][1] += plays[i]
        } else {
            genresTotalPlays.push([genres[i], plays[i]])
        }
    }

    // console.log(genresTotalPlays, "???")
    genresTotalPlays.sort((a, b) => b[1] - a[1])

    // console.log(genresTotalPlays.length, "???")

    const resList = []

    for (i = 0 ; i < genresTotalPlays.length; i++) {
        const sameGenreMusics = []
        for (j = 0 ; j < genres.length; j++) {
            if (genres[j] == genresTotalPlays[i][0]) {
                sameGenreMusics.push([j, plays[j]])
            }
        }
        sameGenreMusics.sort((a, b) => b[1] - a[1])
        let cnt = 0
        for (j = 0; j < sameGenreMusics.length; j++) {
            cnt +=1
            resList.push(sameGenreMusics[j][0])
            if (cnt == 2) {
                break 
            } 
        }
    }
    
    return resList
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]))