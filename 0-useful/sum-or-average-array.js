
/* ARRAY.REDUCE() */

const myArray = [1, 2, 3, 4, 5]

const sumMyArray = (array) => array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

/* Расширенный формат записи:
const sumMyArray = (array) => {
  return array.reduce((previousValue, currentValue) => {
    console.log('previous - ' + previousValue + '; ' + 'current - ', currentValue)
    return previousValue + currentValue
  }, 0)
}
*/

console.log(sumMyArray(myArray))

/* Сумма элементов массива */

const findSum = array => 
  array.length > 0 ? array.reduce((x, y) => 
    x + y, 0) : 0

/*
let sum = arr.reduce(function (x, y) {
    return x + y;
}, 0);
*/

console.log(findSum([1,2,3,4])) // 10

/* Среднее значение элементов массива */

const findAverage = array => 
  array.length > 0 ? array.reduce((x, y) => 
    x + y, 0) / array.length : 0

console.log(findAverage([1,2,3,4])) // 2.5