console.log("%cName: Akash Kolekar", "color:white");
console.log("%c5th november Assignment: 2. use only forEach()", "color:white");
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS")
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro")
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS")
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy")
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro")
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS")
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy")

let array_empolyee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
// Q1
console.log("Q1.%c============find 'TCS' employee details==========================================================", "color:yellow");
array_empolyee.forEach(function (value) {
    if (value.emp_company === 'TCS') {
        console.log(`Employeee name: ${value.emp_name} Employee company: ${value.emp_company}`);
    }
});
// Q2
console.log("Q2.%c============employee salary greater than or equal 50k=============================================", "color:yellow");
array_empolyee.forEach(function (value) {
    if (value.emp_salary >= 50000) {
        console.log(value);
    }
});
// Q3
console.log("Q3.%c============find the sum of all emp salary=========================================================", "color:yellow");
let total = 0;
array_empolyee.forEach(function (value) {
    let result = value.emp_salary
    total += result
})
console.log(`Sum of all salary: ${total}`);
// Q4
console.log("Q4.%c============find the average salary=================================================================", "color:yellow");
let average = 0;
average = total / array_empolyee.length
console.log(average);
// Q5
console.log("Q5.%c============find 'IT' and 'HR' department whose salary greater than or equal  to 75k=================", "color:yellow");
array_empolyee.forEach(function (value) {
    if (value.emp_salary >= 75000 && (value.emp_dept == 'IT' || value.emp_dept == 'HR')) {
        console.log(value);
    }
});
