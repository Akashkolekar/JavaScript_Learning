// Q1
console.log("Q1___Total_number_of_vowels_using_includes()___________");
var givenString = '"Good Morning IT Champ"';
console.log(`Given String: ${givenString}`);
var strLowerCase = givenString.toLowerCase();
var charAt;
var count = 0;
for (let index = 0; index < givenString.length; index++) {
    charAt = strLowerCase.charAt(index);
    if (charAt.includes("a")) {
        count++;
    }
    if (charAt.includes("e")) {
        count++;
    }
    if (charAt.includes("i")) {
        count++
    }
    if (charAt.includes("o")) {
        count++;
    }
    if (charAt.includes("u")) {
        count++;
    }
}
console.log(`The total number of vowels is: ${count}`);
// Q2
console.log("Q2.____cont vowels from string using function____");

function vowels(arg) {
    // var str = arg;
    console.log(`Given String: "${arg}"`);
    var strLowerCase = arg.toLowerCase();
    // var char;
    var count = 0;
    for (let index = 0; index < arg.length; index++) {
        char = strLowerCase.charAt(index);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++;
        }
    }
    console.log(`The total number of vowels is: ${count}`);
}
vowels("I love JavaScript");

console.log("____sum all numbers from 1 to 10______________");
// Q3
var num = function () {
    var total = 0;
    for (let index = 1; index <= 10; index++) {
        total += index;
        console.log(total);
    }
    return total;
}
num()
console.log("----------sum of square number--------------------");
// Q4
function square() {
    var sumSquare = 0;
    for (let index = 1; index <= 5; index++) {
        sumSquare = index * index;
        console.log(sumSquare);
    }
}
square()
console.log("------even positions character------------------------------------");
// Q5. 5.1
var string_1 = "Hard work always pays back";
var string_2 = "Soon I will be Angular IT Champ";

function evenPositionedChars(arg) {
    for (let index = 0; index < arg.length; index++) {
        if (index % 2 == 0) {
            var char = arg.charAt(index);
            if(arg.charAt(index)!=" "){
                console.log(char);
            }

            
        }
    }
    console.log(arg);
}
// console.log(string_1);
evenPositionedChars("Hard work always pays back")
console.log("2nd------------------------------------------");
evenPositionedChars("Soon I will be Angular IT Champ")


console.log("-----odd positions character-------------------------------------");
// 5.2
function oddPositionedChars(arg) {
    for (let index = 1; index < arg.length; index++) {
        if (index % 2 == 0) {

            var char = arg.charAt(index);
            if (arg.charAt(index)!=" ") {
                console.log(char);
            }
            
        }
    }
    console.log(arg);
}
oddPositionedChars("Hard work always pays back")
console.log("2nd------------------------------------------");
oddPositionedChars("Soon I will be Angular IT Champ")

