
// Stop the Zombie Apocalypse! (level 5)
// https://www.codewars.com/kata/5464d6811e0c08e574000b76

// Var №1:
function findZombies(matrix) {
    
    let zeroArr = [...matrix].map(element => element.map(innerElement => innerElement = 0));
    
    let x = 0;
    let y = 0;
    let end = 0;

    zeroArr[x][y] = 1;

    while (end === 0) {

        if (y <= (matrix[0].length - 2) && matrix[x][y] === matrix[x][y+1]) {
            matrix[x][y] = 'x';
            y += 1;
            console.log(x, y);
            zeroArr[x][y] = 1;
        } else if (x <= (matrix.length - 2) && matrix[x][y] === matrix[x+1][y]) {
            matrix[x][y] = 'x';
            x += 1;
            console.log(x, y);
            zeroArr[x][y] = 1;
        } else if (y >= 1 && matrix[x][y] === matrix[x][y-1]) {
            matrix[x][y] = 'x';
            y -= 1;
            console.log(x, y);
            zeroArr[x][y] = 1;
        } else if (x >= 1 && matrix[x][y] === matrix[x-1][y]) {
            matrix[x][y] = 'x';
            x -= 1;
            console.log(x, y);
            zeroArr[x][y] = 1;
        } else {
            end = 1;
        }
    }
    return zeroArr;
};

// Var №2:
/*
function findZombies(matrix) {
    for (let x = 0; x <= matrix.length - 1; x++ ) {
       for (let y = 0; y <= matrix.length[0] - 1; y++) {
        console.log(matix[x][y]);
       } 
    }
};
*/

let matrix = [
    [ 1, 0, 0 ],
    [ 1, 1, 1 ], 
    [ 0, 0, 1 ], 
    [ 0, 0, 1 ] 
];

console.log(findZombies(matrix));

/*
expected [ 
    [ 1, 0, 0 ], 
    [ 1, 1, 1 ], 
    [ 0, 0, 1 ], 
    [ 0, 0, 1 ] ] 
    
to deeply equal [ 
    [ 1, 0, 0 ], 
    [ 1, 1, 1 ], 
    [ 1, 0, 1 ], 
    [ 0, 0, 1 ] ]
*/