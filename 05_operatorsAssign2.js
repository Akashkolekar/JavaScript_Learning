
console.log("A2,Q1.----greatest number---------------------------");
var greater_num = function(num1, num2){
    var result = num1 > num2 ? num1 : num2;
    console.log(`Greater number is: ${result}`);
}

greater_num(10,-10);
greater_num(800,899);
console.log("Q2.----even or odd----------------------------------");

var isEvenOrOdd = function(num1){
    var result = num1%2==0 ? true : false;
    // return result
    console.log(num1,"is even or odd:", result);
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd( 0);
isEvenOrOdd(101);
console.log("Q3.----even od odd string---------------------------");
var lengthEvenOrOdd = function(word) {
    console.log(`Word: ${word}`);
    var wordLength = word.length;
    console.log(`Length of word: ${wordLength}`);
    var result = wordLength%2==0 ? "Even" : "Odd";
    console.log("Even or Odd: ",result);

}
lengthEvenOrOdd("JavaScript");
console.log("----------------------------------------------------");
lengthEvenOrOdd("developer");
console.log("----------------------------------------------------");
lengthEvenOrOdd("google");