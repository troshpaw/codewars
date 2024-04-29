
// A) Сортировка числового массива:
let myArr = [1, 26, 2, 77, 99, 45, 0, 10, 5]

// 1. по возрастанию:
let myArrSortUp = myArr.sort((a, b) => a - b)

console.log(myArrSortUp)

// 2. по убыванию:
let myArrSortDown = myArr.sort((a, b) => b - a)

console.log(myArrSortDown)


// B) Сортировка строкового массива:
myArr = ['1', '26', '2', '77', '99', '45', '0', '10', '5']

// 1. по возрастанию:
myArrSortUp = myArr.sort((a, b) => a - b)

console.log(myArrSortUp)

// 2. по убыванию:
myArrSortDown = myArr.sort((a, b) => b - a)

console.log(myArrSortDown)