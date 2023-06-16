/*Your order, please*/

/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  "" */

/* Подробно:
const order = (str) => {
    const arr = str.split(' ')
    const arrOnlyNumber = []

    arr.forEach((element) => {
        element.split('').forEach((elementArr) => {
            if (parseInt(elementArr) > 0) {
                arrOnlyNumber.push(elementArr)
            }
        })
    })

    const arrOnlyNumberBeforeSort = [...arrOnlyNumber]
    console.log('Массив из чисел до сортировки:')
    console.log(arrOnlyNumberBeforeSort)

    const arrOnlyNumberAfterSort = arrOnlyNumber.sort()
    console.log('Массив из чисел после сортировки:')
    console.log(arrOnlyNumberAfterSort)

    const resultArr = []

    console.log('Изменение позиций элементов: ')
    
    arrOnlyNumberAfterSort.forEach((element, index) => {
        
        console.log(arrOnlyNumberBeforeSort.indexOf(element), ' -> ', index)
        
        resultArr.push(arr[arrOnlyNumberBeforeSort.indexOf(element)])
    })
    

    console.log('Итоговая строка: ')
    const resultStr = resultArr.join(' ')
    console.log(resultStr)

    return resultStr
}
*/

const order = (str) => {

    const arr = str.split(' ')
    const arrOnlyNumber = []

    arr.forEach((element) => {
        element.split('').forEach((elementArr) => {
            if (parseInt(elementArr) > 0) {
                arrOnlyNumber.push(elementArr)
            }
        })
    })

    const arrOnlyNumberBeforeSort = [...arrOnlyNumber]

    const arrOnlyNumberAfterSort = arrOnlyNumber.sort()

    const resultArr = []

    arrOnlyNumberAfterSort.forEach((element, index) =>
        resultArr.push(arr[arrOnlyNumberBeforeSort.indexOf(element)]))
    
    const resultStr = resultArr.join(' ')
    return resultStr
}   

order("4of Fo1r pe6ople g3ood th5e the2") // "Fo1r the2 g3ood 4of th5e pe6ople"


// BEST PRACTICES:
function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"))


// Подробный разбор: 
const arr = ['4of', 'Fo1r', 'pe6ople', 'g3ood', 'th5e', 'the2']

arr.sort((a, b) => a.match(/\d/) - b.match(/\d/))

console.log(arr)
