console.log("%cName: Akash Kolekar", "color:white");
console.log("%c5th november Assignment: 1. forEach() with arrow function", "color:white");
'use strict';
// Q1
console.log("Q1.%c============array element with its index using forEach========================", "color:yellow");
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601]
array_numbers.forEach((value, index) => {
    console.log(index, ':', value);
})
// Q2
console.log("Q2.%c============find positive numbers========================", "color:yellow");
const empty = [];
array_numbers.forEach((value) => {

    if (value > 0) {
        empty.push(value);
    }
});
console.log(empty);
// Q3
console.log("Q3.%c============find negative numbers========================", "color:yellow");
const empty1 = [];
array_numbers.forEach((value) => {
    if (value < 0) {
        empty1.push(value);
    }
})
console.log(empty1);
// Q4
console.log("Q4.%c============find the even numbers========================", "color:yellow");
let evenA = [];
array_numbers.forEach((value, index) => {
    if (index % 2 == 0) {
        evenA.push(value);   
    }
});
console.log(evenA);
// Q5
console.log("Q5.%c============sum of all element===========================", "color:yellow");
var total = 0;
array_numbers.forEach((value) => {
    total += value;
});
console.log(`Sum of all element: ${total}`);
// Q6
console.log("Q6.%c============log only even positioned array value========================", "color:yellow");
var even = [];
array_numbers.forEach((value,index) => {
    if (index %2==0) {
        even.push(value);
    }
});
console.log(even);
// Q7
console.log("Q7.%c============log only odd positioned array value if it is negative======", "color:yellow");
var odd = [];
array_numbers.forEach((value,index) => {
    if (index %2==1 && value < 0 ) {
        odd.push(value);
    }
});
console.log(odd);