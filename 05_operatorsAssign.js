console.log("Q1.-------------------------------------------------");

var wordLengthSquare = function(word) {
    console.log(`Given Word: ${word}`);
    var wordLength = word.length;
    console.log(`Length of word: ${wordLength}`);
    console.log(`Square of length ${wordLength * wordLength}`);

}
wordLengthSquare("JavaScript");
console.log("----------------------------------------------------");
wordLengthSquare("Google");
console.log("----------------------------------------------------");
wordLengthSquare("Developer");
console.log("Q2.--------------reverse string---------------------");
function reverse(str){
    var get = str.split('').reverse('').join('')
    // var get1 = get.reverse('')
    // var get2 = get1.join('')
    console.log("Reverse string: ",get);
}
reverse("I am Angular Developer")

console.log("----------------------------------------------------");
var findString = function pString() {
    console.log("Given string: 'I am Angular Developer'");
    var gStringL = "I am Angular Developer".length;
    console.log(`String Length: ${gStringL}`);
    var result = "I am Angular Developer".split(" ")
    var totalWords = result.length;
    console.log(`Total words: ${totalWords}`);
    console.log(`Divide by total number words: ${totalWords % gStringL}`);
    console.log(`Multiple by total number words: ${totalWords * gStringL}`);
}
findString()

