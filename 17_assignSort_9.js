console.log("%cName: Akash Kolekar", "color:white");
console.log("%c5th november Assignment: 9. sorting in ascending / descending order and reverse", "color:white");
// Q1
const array_roll_numbers = [113,45,56,11,32,45,109,799,56,45]
console.log("%cQ1============reverse the array===========================================================", "color:yellow");
console.log(`Given array: ${array_roll_numbers}`);
let reverse = array_roll_numbers.reverse();
console.log(reverse);
// Q2
console.log("%cQ2============use the sort() method=======================================================", "color:yellow");
let sort = array_roll_numbers.sort()
console.log(sort);
console.log("Issue: array is not properly sorted,sort only prefered only first digit");
// Q3
console.log("%cQ3=============sort array in ascending order==============================================", "color:yellow");
let ascending = array_roll_numbers.sort((first,second)=>{
    return (first > second ? 1 : -1)
})
console.log(ascending);
console.log("%cQ4=============sort array in descending order without using reverse() method==============", "color:yellow");
let descending = array_roll_numbers.sort((first,second)=>{
    return (first> second ? -1 : 1)
})
console.log(descending);
// Q5
console.log("%cQ5=============sort array in descending order with using reverse() method=================", "color:yellow");
// array_roll_numbers.reverse()
console.log(array_roll_numbers);
// Q6
console.log("%cQ6=============greateset number form array================================================", "color:yellow");
// let greaterNumber = array_roll_numbers.sort((a , b)=>{
//     return a - b
// })
// largest = array_roll_numbers[array_roll_numbers.length - 1]
// console.log(`greater number: ${largest}`);
let greaterNumber = Math.max(...array_roll_numbers)
console.log(greaterNumber);
// Q7
console.log("%cQ7=============smallest number form array=================================================", "color:yellow");
let smallestNumber = Math.min(...array_roll_numbers)
console.log(smallestNumber);
// Q8
console.log("%cQ8=============remove duplicate form array=================================================", "color:yellow");
let duplicate = [...new Set(array_roll_numbers)]
console.log(duplicate);