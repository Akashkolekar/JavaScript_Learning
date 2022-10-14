console.log("Q1.======Print num 5 to 15=========================================");
for (index = 5; index <= 15; index++) {
    console.log(index);
}
console.log("Q2.======Print num 50 to 40=========================================");
for (index = 50; index >= 40; index--) {
    console.log(index);
}
console.log("Q3.======first 15 odd numbers=========================================");
for (index = 1; index <=30 ; index+=2) {
    console.log(index);
}
console.log("Q4.======first 10 even numbers=========================================");
var countEven = 0;
for (index = 0; index < 100 ; index++) {
    if (index%2==0) {
        console.log(index);
        countEven = countEven +1;
        if (countEven==10) {
            break;
        }
    }
}
console.log("Q5.======print table of 5=========================================");
for (index = 5; index <= 50; index=index+5) {
    console.log(index);
}
console.log("Q6.======print table of 10=========================================");
for (index = 10; index <= 100; index=index+10) {
    console.log(index);
}
console.log("Q7.======print table of 10 in reverse=========================================");
for (index = 100; index >= 10; index=index-10) {
    console.log(index);
}
