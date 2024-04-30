
// Cat years, Dog years

var humanYearsCatYearsDogYears = function(humanYears) {
    switch (humanYears) {
        case 1:
            return [humanYears, 15, 15];
        case 2:
            return [humanYears, 15 + 9, 15 + 9];
        default:
            return [humanYears, 15 + 9 + 4 * (humanYears - 2), 15 + 9 + 5 * (humanYears - 2)];
    }
}

console.log(humanYearsCatYearsDogYears(10));
// [10,56,64]

/*
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/