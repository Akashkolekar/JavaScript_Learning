// 1.
console.log("Q)1");
var square = function(value) {
    console.log("Square Of", value, "is:", value * value);
}

square(5);
square(6);
square(25);
square(100);
console.log("Q)2====================================");
// 2.
console.log("Type Of Function is:", typeof square);
console.log("Q)3====================================");
// 3.
var areaTriangle = function(base, height){
    // var area =1/2*(base * height);
    console.log("Area Of a Triangle is:", 1/2*(base*height));
}
areaTriangle(45,34);
console.log("Q)4====================================");
// 4.
var areaRectangle = function(length, width) {
    console.log("Area of Rectangle is:", length * width);
}
areaRectangle(499,917);
console.log("Q)5====================================");
// 5.
var swap_values = function (arg1, arg2) {
    console.log("Before Swap.....", arg1,arg2);
    // console.log(arg1,arg2);

    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("After Swap......", arg1,arg2);
    // console.log(arg1,arg2);
}
swap_values("Virat","Anushka");
swap_values(1000,2000)
// 6.
console.log("Q)6====================================");
var string = function() {
    console.log('"JavaScript the most popular language"');
    var string1 = "JavaScript the most popular language"
    console.log("Total Character of available in the string:", string1.length);
    console.log("The index of Character 'S':", string1.indexOf('S'));
    console.log("The index of string 'lang':",string1.indexOf('lang'));
    console.log("The last Character using length property:",string1.charAt(string1.length-1));
    console.log("The 3rd last Character using length property:",string1.charAt(string1.length-3));
    
}

string()