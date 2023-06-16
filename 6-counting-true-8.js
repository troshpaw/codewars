

/* Counting sheep... - 8 */

/*
const countSheeps = arrayOfSheep => {
    let countTrue = 0
    arrayOfSheep.forEach((element) => element ? countTrue += 1 : 0)
    return countTrue
}
*/

// BEST PRACTICES:
// 1:
const countSheeps = array => array.filter(Boolean).length
// 2:
// const countSheeps = array => array.filter(item => item).length


/* то же самое, что:
array.filter(item => Boolean(item)) */

/* Метод filter() создаёт новый массив со всеми элементами, 
прошедшими проверку, задаваемую в передаваемой функции. */


console.log(countSheeps(
    [true, true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))