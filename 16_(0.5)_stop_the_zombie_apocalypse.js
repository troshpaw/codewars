
// Stop the Zombie Apocalypse! (level 5)
// https://www.codewars.com/kata/5464d6811e0c08e574000b76

function findZombies(matrix) {
    
    let zeroArr = [...matrix].map(element => element.map(innerElement => innerElement = 0));
    
    let x = 0;
    let y = 0;
    let end = 0;

    zeroArr[x][y] = 1;

    while (end === 0) {

        if (matrix[x][y] === matrix[x][y+1]) {
            matrix[x][y] === 'x';
            y += 1;
            console.log(x, y);
            zeroArr[x][y] = 1;
        } else if (matrix[x][y] === matrix[x+1][y]) {
            matrix[x][y] === 'x';
            x += 1;
            console.log(x, y);
            zeroArr[x][y] = 1;
        } else if (matrix[x][y] === matrix[x][y-1]) {
            matrix[x][y] === 'x';
            y -= 1;
            console.log(x, y);
            zeroArr[x][y] = 1;
        } else if (matrix[x][y] === matrix[x-1][y]) {
            matrix[x][y] === 'x';
            x -= 1;
            console.log(x, y);
            zeroArr[x][y] = 1;
        } else {
            end = 1;
        }
    }
    return zeroArr;
};

let numbers = [
    [0, 0], [0, 1], [0, 2], [0, 3],
    [1, 0], [1, 1], [1, 2], [1, 3],
    [2, 0], [2, 1], [2, 2], [2, 3],
    [3, 0], [3, 1], [3, 2], [3, 3],
];

/*
let city = [
    [9, 3, 9, 3],
    [9, 3, 9, 9],
    [9, 3, 3, 9],
    [9, 9, 9, 9]
]; 
*/
let city = [
    [8, 2, 3],
    [8, 2, 3],
    [1, 2, 8]
];

console.log(findZombies(city));
