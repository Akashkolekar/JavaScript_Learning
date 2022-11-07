console.log("%cName: Akash Kolekar", "color:white");
console.log("%c5th november Assignment: 6. for filter() method", "color:white");
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
// Q1
console.log("%cQ1============number which are greater than 50========================", "color:yellow");
let array = array_numbers.filter(value => {
    return value > 50
})
console.log(array);
// Q2
console.log("%cQ2============find even numbers=========================", "color:yellow");
let even = array_numbers.filter((value) => {
    if (value % 2 === 0) {
        return value
    }
})
console.log(even);
// Q3
console.log("%cQ3============find odd numbers===========================", "color:yellow");
let odd = array_numbers.filter((value) => {
    if (value % 2 === 1) {
        return value
    }
})
console.log(odd);
// Q4
console.log("%cQ4============find which are multiple of 5========================", "color:yellow");
let multipleArray = []
let multiple = array_numbers.filter((value, index) => {
    let element = array_numbers[index]
    if (element % 5 == 0) {
        multipleArray.push(value)
    }
})
console.log(multipleArray);
// Q5
console.log("%cQ5============find numbers which are between 20 and 50==========", "color:yellow");
let betweenArray = []
let between = array_numbers.filter((value) => {
    if (value < 50 && value > 20) {

        betweenArray.push(value)
    }
})
console.log(betweenArray);