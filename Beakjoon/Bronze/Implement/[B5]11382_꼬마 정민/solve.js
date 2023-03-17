const fs = require('fs');
const [addVarA, addVarB, addVarC] = fs.readFileSync('inputFile.txt').toString().trim().split(" ")
.map(function(a){
    return Number(a)
})

console.log(addVarA+addVarB+addVarC)