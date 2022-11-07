console.log("%cName: Akash Kolekar", "color:white");
console.log("%c5th november Assignment: 4. map()", "color:white");
// Q1
console.log("%cQ1============adding 10 into each element using map()========================", "color:yellow");
const array_numbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given array: ${array_numbers}`);

let addition = array_numbers.map((arg) =>{
    return arg + 10;
});
console.log(addition);
// Q2
console.log("%cQ2============square each array element=======================================", "color:yellow");
let square = array_numbers.map((arg) =>{
    return arg * arg
})
console.log(square);
// Q3
console.log("%cQ3============add index value into its corresponding each array element===========", "color:yellow");
let index = array_numbers.map((arg,index)=>{
    return arg + index
})
console.log(index);
