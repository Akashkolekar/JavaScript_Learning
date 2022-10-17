// var string_1 = "akash"
console.log("-------reverse string using charAt-------------");
// console.log('Given string 1: "Hard work always pays back"');
// console.log('Given string 2: "Soon I will be Angular IT Champ"');
function reverseString(arg) {
    var lengthStr = arg.length - 1;
    var reverseStr = "";
    console.log(arg);
    for (let index = lengthStr; index >= 0; index--) {
        // console.log(string_1.charAt(index));
        reverseStr = reverseStr + arg.charAt(index)
    }
    console.log(`${reverseStr}`);
}
reverseString("Hard work always pays back");
console.log("----------------------------------");
reverseString("Soon I will be Angular IT Champ")
