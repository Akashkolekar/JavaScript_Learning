// Q1
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("Given array: ", fruits_seasonal);
console.log("Q1===============log first and last element==========================");
console.log(`First element: ${fruits_seasonal[0]}`);
console.log(`Last element: ${fruits_seasonal[fruits_seasonal.length -1]}`);
// Q2
console.log("Q2===============add 'Papaya' element before 'Banana==========================");
fruits_seasonal.unshift("Papaya")
console.log(fruits_seasonal);
// Q3
console.log("Q3===============Remove 'Mango' from array===========================");
fruits_seasonal.splice(4,1)
console.log(fruits_seasonal);
// Q4
console.log("Q4===============add 'Pineapple' at last position====================");
fruits_seasonal.push("Pineapple")
console.log(fruits_seasonal);
// Q5
console.log("Q5===============add 'Dragon fruit' before water melon===============");
fruits_seasonal.splice(4,0,"Dragon fruit")
console.log(fruits_seasonal);
// Q6
console.log("Q6===============replace 'Orange' with 'Kiwi'========================");
fruits_seasonal.splice(2,1,"Kiwi")
console.log(fruits_seasonal);
// Q7
console.log("Q7===============log element from index 1 to 4=======================");
let sliced = fruits_seasonal.slice(1, 4)
console.log(sliced);
// Q8
console.log("Q8===============last 3 element using length prop====================");
let lengthP = fruits_seasonal.splice(fruits_seasonal.length -3)
console.log(lengthP);
