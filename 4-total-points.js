// Total amount of points

const points = (games) => {
    
    let count = 0

    games.forEach((elGames) => {
        
        let modElGames = elGames.split(':').map((arrEl) => parseInt(arrEl))

        if (modElGames[0] > modElGames[1]) {
            count += 3
        }
        
        if (modElGames[0] === modElGames[1]) {
            count += 1
        }
    })

    console.log(count)
    return count
}

points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) // 30
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) // 10
points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) // 0
points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) // 15
points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) // 12


// Best practice:
const pointsBest=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }