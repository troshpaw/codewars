
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/javascript

// Equal Sides Of An Array

// const exArr = [20,10,-80,10,10,15,35];
const exArr = [1,100,50,-51,1,1];

function findEvenIndex(arr) {
    
    let sumLeft = 0;
    let sumRight = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        
        for (let j = 0; j < i; j++) {
            sumLeft += arr[j];
        };
        // console.log(sumLeft);
        
        for (let k = i + 1; k < arr.length; k++) {
            sumRight += arr[k];
        };
        // console.log(sumRight);
        
        if (sumLeft === sumRight) {
            return i;
        }

        // console.log("");

        sumLeft = 0;
        sumRight = 0;
    }

    return -1;
};

console.log(findEvenIndex(exArr));