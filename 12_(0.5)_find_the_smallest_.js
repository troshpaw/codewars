

// https://www.codewars.com/kata/573992c724fc289553000e95

// Find the smallest (level 5) (решено частично)

function smallest(n) {
    
    let arrBeforeSort = n.toString().split('');
    let arrAfterSort = [...arrBeforeSort].sort((a, b) => a - b);
    let arrAfterModern;

    console.log(arrBeforeSort);
    console.log(arrAfterSort);


    if (arrBeforeSort.toString() === arrAfterSort.toString()) {
        return n;
    }

    for (let i = 0; i < arrAfterSort.length; i++) {
        for (let j = 0; j < arrBeforeSort.length; j++) {
            if (arrAfterSort[i] < arrBeforeSort[j]) {
                
                let pos = arrBeforeSort.findIndex(item => item === arrAfterSort[i]);
                console.log("Position: ", pos);
                arrAfterModern = [...arrBeforeSort];
                arrAfterModern.splice(pos, 1);
                //arrAfterModern = [...arrBeforeSort].unshift(arrAfterSort[i]); // Почему не работает?
                arrAfterModern.unshift(arrAfterSort[i]);

                //console.log(arrBeforeSort);
                //console.log(arrAfterSort[i]);
                //console.log(arrAfterModern);
                return [+arrAfterModern.join(''), pos, i];
            }
        }
    }
    return n;
}

/*
const arrStart = [261235, 209917, 285365, 269045, 296837];
const arrFinal = [[126235, 2, 0], [29917, 0, 1], [238565, 3, 1], [26945, 3, 0], [239687, 4, 1]];

for (let i = 0; i < arrStart.length; i++) {
    console.log(smallest(arrStart[i]));
    console.log(arrFinal[i]);
    console.log("");
}
*/

console.log(smallest(296837));

// Sample Tests: 
/*
function testing(n, res) {
    Test.assertSimilar(smallest(n), res);
}
describe("Basic tests",function() {
it("smallest",function() {
    testing(261235, [126235, 2, 0]);
    testing(209917, [29917, 0, 1]);
    testing(285365, [238565, 3, 1]);
    testing(269045, [26945, 3, 0]);
    testing(296837, [239687, 4, 1]);
})})
*/