// Q1
console.log("Q1._______________________________________________________________________________________________________");
class Vehicle {
    model
    company
    vehicleType
    color
    price
    constructor(model, company, vehicleType, color, price){
        this.model = model;
        this.company = company;
        this.vehicleType = vehicleType;
        this.color = color;
        this.price = price;
    }
}

let akash = new Vehicle("pulsar-220","Bajaj", "Bike","Black", "Rs. 1.18 lakh - 1.38 lakh");
let akash1 = new Vehicle("Bolero", "Mahindra", "Car", "White", "Rs. 10.45 lakh - 11.45 lakh");
let akash2 = new Vehicle("Tigor", "TaTa", "Car", "red","Rs. 6.00 lakh - 8.84 lakh");
let akash3 = new Vehicle("Innova Crysta","Toyota", "Car", "Black", "Rs. 17.7 laks - 26.8 lakh");
let akash4 = new Vehicle("Tiago", "TaTa", "Car", "White", "Rs. 8.4 lakh - 9.5 lakh")
console.log(akash);
console.log(akash1);
console.log(akash2);
console.log(akash3);
console.log(akash4);
// Q2
console.log("Q2._______________________________________________________________________________________________________");
class College {
    collegeName
    city
    studCapacity
    pinCode
    constructor(collegeName, city, studCapacity, pinCode){
        this.collegeName = collegeName;
        this.city = city;
        this.studCapacity = studCapacity;
        this.pinCode = pinCode;
    }
}

let college = new College("Rajaram College", "Kolhapur", "400+", 416004)
let college1 = new College("Bharati Vidyapeeth", "Kolhapur", "300+", 416013)
let college2 = new College("Gokhale College", "Kolhapur", "350+", 416012)
let college3 = new College("New College", "Kolhapur", "500+", 416012)
console.log(college);
console.log(college1);
console.log(college2);
console.log(college3);
// Q3
console.log("Q3._____________Traverse object___________________________________________________________________________");
var count = 0
function traverse_object(object) {
    
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(`${key} : ${element}`);
        } 
    } 
}
console.log("=========================================");
traverse_object(college);
console.log("=========================================");
traverse_object(college1);
console.log("=========================================");
traverse_object(college2);
console.log("=========================================");
traverse_object(college3);
console.log("==InstanceOf=============================");
console.log(college instanceof College);
console.log(college1 instanceof College);
console.log(college2 instanceof College);
console.log(college3 instanceof College);
