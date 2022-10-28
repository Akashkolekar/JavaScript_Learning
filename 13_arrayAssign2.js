// Q1
const array_numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log("Given array: ", array_numbers);
console.log(`total elements are: ${array_numbers.length}`);
// Q2
console.log("Q2===========log first and last element===================");
console.log(`First element: ${array_numbers[0]}`);
console.log(`Last element: ${array_numbers[array_numbers.length - 1]}`);
// Q3
console.log("Q3===========log third last element using length prop=====");
console.log(`Third last element is: ${array_numbers[array_numbers.length - 3]}`);
// Q4
console.log("Q===========find all even no.=============================");
const even = []
for (let index = 0; index < array_numbers.length; index++) {
    const num = array_numbers[index]
    if (num % 2 === 0) {
        even.push(num)
    }
}
console.log('even numbers are: ', even);
// Q5
console.log("Q5===========find all odd no.=============================");
const odd = []
for (let index = 0; index < array_numbers.length; index++) {
    const num = array_numbers[index];
    if (num % 2 === 1) {
        odd.push(num)
    }
}
console.log('odd numbers are: ', odd);
// Q6
console.log("Q6===========find even positioned no. from array==========");
const evenPosition = []
for (let index = 0; index < array_numbers.length; index++) {
    if (index % 2 === 0) {
        evenPosition.push(array_numbers[index])
    }
}
console.log("even positioned no.: ", evenPosition);
// Q7
console.log("Q7===========find odd positioned no. from array===========");
const oddPosition = []
for (let index = 0; index < array_numbers.length; index++) {
    if (index % 2 === 1) {
        oddPosition.push(array_numbers[index])
    }
}
console.log("odd positioned no.: ", oddPosition);
// Q8
console.log("Q8===========sum of all elements from array===============");
let count = 0
for (let index = 0; index < array_numbers.length; index++) {
    count += array_numbers[index]

}
console.log(`sum of all element: ${count}`);
// Q9
console.log("Q9===========find no. which are multiple of 5=============");
const count1 = []
for (let index = 0; index < array_numbers.length; index++) {
    let element = array_numbers[index]
    if (element % 5 == 0) {

        count1.push(element)
    }
}
console.log(count1);

// Q10
console.log("Q10===========is 115 available in given array=============");
let numAvail115 = array_numbers.includes(115)
console.log(`  ${numAvail115}`);
// Q11
console.log("Q11===========is 23 available in given array==============");
let numAvail23 = array_numbers.includes(23)
console.log(`  ${numAvail23}`);