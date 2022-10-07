function name() {
    console.log("My Name Is Akash Kolekar");
    console.log("I am From Kolhapur");
}
name();

console.log("============Concat============");
function smart(firstName, lastName) {
    console.log(firstName + lastName);
}
smart("Akash","Kolekar");


function swap_values(cricketer, actress) {
console.log("========Before Swap============");
console.log(cricketer, actress);
console.log("========After Swap=============");
var temp = cricketer;
cricketer = actress;
actress = temp;
console.log(cricketer,actress);
}
swap_values("Virat","Anushka");
swap_values("1000","2000");

console.log("============Argument Addition==========");
function add_three_numbers(arg1,arg2,arg3) {
console.log(arg1+arg2+arg3);
}
add_three_numbers(10.23,600,40);
add_three_numbers("Hello","Good","Morning");