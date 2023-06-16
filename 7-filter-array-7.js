
/* List Filtering - 7 */

const filter_list = array => array.filter(item => typeof item === 'number')

console.log(filter_list([1,2,'a','b', 0])) // [1,2,0]