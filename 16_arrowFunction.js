console.log("%cName: Akash Kolekar", "color:white");
console.log("%c4th november Assignment: 1", "color:white");
// Q1
console.log("%cQ1.===============arrow fun with no args and no return value======================", "color:yellow");
const string = () => {
    console.log("Good Evening, Today is Friday");
}
string()
// Q2
console.log("%cQ2.a=============arrow fun with 3 arg perform the multiplication of '5,5,2'=======", "color:yellow");
const stringMultiplication = (arg1, arg2, arg3 = 2) => {
    let mult = arg1 * arg2 * arg3
    console.log(`multiplication : ${mult}`);
}
stringMultiplication(5, 5, 2)
console.log("%cQ2.b=============multiplication with default 3rd arg '10,4,(default(2))'==========", "color:yellow");
stringMultiplication(10, 4)
// Q3
console.log("%cQ3.a=============addition with 5 arg and return value=============================", "color:yellow");
const show = (arg1, arg2, arg3, arg4, arg5) => {
    return `addition: ${arg1 + arg2 + arg3 + arg4 + arg5}`;

}
console.log(show(100, 100, 200, 349, 756));
console.log("%cQ3.c=============add another string value=========================================", "color:yellow");
console.log(show("I am", " Learning", " ES6", " feature", " In depth"));