// Q1.
console.log("Q1.-------shallow cloning------------------------------------------");
const array_nums =[20,3,4,56,90,400,49]
const array_clone = array_nums
console.log(array_nums);
console.log("------update clone array-------------------------------------------");
array_clone.push(55,56)
console.log(array_clone);
// Q2
console.log("Q2.--------Deep cloning spread operator-----------------------------------------");
const spreadO = [...array_nums]
console.log("-----update original value--------------------------------------------");
array_nums.push(10,25)
console.log(array_nums);
console.log("------original array-------------------------------------------");
console.log(spreadO);
// Q3
console.log("Q.3--concat or merge-------------------------------------------");
let array_even = [2,30,14,8]
console.log(`Given array: ${array_even}`);
let array_update = [...array_even , ...array_nums]
console.log("----merged with array_nums------------------------------------------");
console.log(array_update);
// Q4
console.log("Q4.----create employee_info object--------------------------------------------------------------");
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        june_month: "65,0000INR",
    },
    address: {
        locality: {
        colony: "OM Vrindavan Society",
        street: "Kanch pokli, 431202",

    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
},
mobiles: ["+91 8600 3456 88", "1800- 4567 32","+91- 9096 5678 77"]
}
// Q5
console.log("Q5---a).employee details---------------------------------");
console.log(employee_info.address);
console.log("---b).mobile number---------------------------------");
console.log(employee_info.mobiles);
// Q6
console.log("Q6.deep clone using(...operator)----------------------------------------------------");
let employee_clone = {...employee_info}
let clone_street = employee_clone.address.locality.street = "Chinch Pokli"
console.log("---a)update street property-------------------------------------------");
console.log(employee_clone.address);
console.log("---b)update mobile number-------------------------------------------------");
let update_mob = employee_clone.mobiles[0] = "+91 8421 7428 01"
console.log(employee_clone.mobiles);
console.log("---c)original object--------------------------------------------------------");
console.table(employee_info);
console.log("---c)clone object--------------------------------------------------------");
console.table(employee_clone);
console.log("---d)issue------------------------------------------------------------------");
console.log("After updating street and mobile no. in clone object, it also changed in original object");
// Q7
console.log("Q7.---deep copy using JSON.stringify()------------------------------------------------------------------------");
console.log("---a)property 'july_month' updated to salary '80k'");
let deepCopy = JSON.parse(JSON.stringify(employee_info))
let updateSalary = deepCopy.salary.july_month = "80,000INR"
// console.log(deepCopy.salary);
console.log("---b)property 'country' updated to 'united kingdom'");
let updateCountry = deepCopy.address.country = "United Kingdom"
// console.log(deepCopy.address);
console.log("---c)updated values for original and cloned Q7.a, Q7.b--------------------------------------------------------------------------");
console.log("------------------------------------------------------7.a------------------------------------------------------------------");
console.log("Original object",employee_info.salary);
console.log("cloned object", deepCopy.salary);
console.log("------------------------------------------------------7.b------------------------------------------------------------------");
console.log("Original object",employee_info.address);
console.log("cloned object", deepCopy.address);