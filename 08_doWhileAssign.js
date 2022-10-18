// Q1.
console.log("====count vowels in string========");
let vowelString = "I am very good IT Developer"
let vowelLowerCase = "aeiouAEIOU"
// let vowelUpperCase = "AEIOU"
let vowel = 0
let index = 0
let char
while (index < vowelString.length) {
    char = vowelString.charAt(index)
    if (vowelLowerCase.includes(char)) {
        vowel++
    }

    index++
}
console.log(`String: ${vowelString}`);
console.log(`total number of vowels: ${vowel}`);

// Q2

console.log("==============sum of cube using do_while");
function cube() {
    let count = 1
    let sumOfCube = 0
    let cube
    do {

        cube = count * count * count
        sumOfCube = sumOfCube + cube
        count++
        // console.log(result);
    } while (count <= 5);
    console.log(`Sum of cube from 1 to 5 : ${sumOfCube}`);
}
cube()

console.log("======odd position character=====================================");

function oddPositionedChars(myString_1) {
    console.log(`String: ${myString_1}`);
    let string_1 = 0
    // let myString_1 = "Soon I will be Angular IT Champ"
    do {
        
        string_1++
        let char = myString_1.charAt(string_1);
        if (string_1 % 2 == 1 && char != " ") {
            console.log(char);

        }

    } while (string_1 <= myString_1.length);
    
}
oddPositionedChars("Hard work always pays back")
oddPositionedChars("Soon I will be Angular IT Champ")

// Q4
console.log("==================================================");
console.log("======reverse string==============================");
function reverseString(reverseStrinG) {
    let reverse_1 = reverseStrinG.length
    let reverse = reverse_1
    let reverseStr = "";
    do {
        reverse--
        reverseStr = reverseStr + reverseStrinG.charAt(reverse)
    } while (reverse >= 0);
    console.log(`String: ${reverseStrinG}`);
    console.log(reverseStr);

}

reverseString("Hard work always pays back")
reverseString("Soon I will be Angular IT Champ")
