// Q1
console.log("Q1.__________Even Or Odd________________________________");
function evenOrOdd(num) {
    if (num%2==0) {
        var result = `${num} Number is EVEN`;
    }else {
        var result = `${num} Number is ODD`;
        
    }
    return result;
}

console.log(evenOrOdd(45));
console.log(evenOrOdd(70));
console.log(evenOrOdd(67));
console.log(evenOrOdd(98));
// Q2
console.log("Q2.________eligibile for vote or not____________________");

function vote(age) {
    if (age >= 18) {
       var result = `You are eligible for vote`
    }else {
        var result = `You are not eligible for vote`
    }
    console.log(`Your age is: ${age}`);
    return result;
}

console.log(vote(18));
console.log("________________________________________________________");
console.log(vote(20));
console.log("________________________________________________________");
console.log(vote(17));
console.log("________________________________________________________");
console.log(vote(40));
// Q3
console.log("Q3.______check string is more than 10 charcter__________");

function char(value) {
    if (value.length > 10) {
        var result = "string contains more than 10 character"
    }else {
        var result = "string contains less than 10 character"
    }
    console.log('String:', value);
    console.log(`Length of String: ${value.length}`);
    return result;
}
console.log(char("JavaScript - ES6"));
console.log(char("Kotlin"));
// Q4
console.log("Q4.______string starts with 'Java' or not_______________");

function starts(value) {
    if (value.startsWith("Java")) {
        var result = `Given String starts with "Java"`
    }else {
        var result = `Given string doesnt start with "java"`
    }
    console.log('Given string :', value );
    return result;
}
console.log(starts("JavaScript Language"));
console.log("________________________________________________________");
console.log(starts("Kotlin"));
