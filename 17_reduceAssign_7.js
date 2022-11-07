console.log("%cName: Akash Kolekar", "color:white");
console.log("%c5th november Assignment: 7. for reduce() method", "color:white");
// Q1
console.log("%cQ1============sum of all numbers using reduce()========================", "color:yellow");
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]
const sum = array_numbers.reduce((running, value) => {
    return running + value
})
console.log(`Sum of all numbers: ${sum}`);
// Q2
console.log("%cQ2============find the sum of all even numbers========================", "color:yellow");
let even = array_numbers.filter((value) => {
    if (value % 2 === 0) {
        return value
    }
})
// console.log(even);
let evenSum = even.reduce((running, value) => {
    return running + value
})
console.log(`Sum of all even numbers: ${evenSum}`);