console.log("%cName: Akash Kolekar", "color:white");
console.log("%c5th november Assignment: 5. forEach()", "color:white");
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
console.log("%cQ1============list of all employee names & log new array========================", "color:yellow");
const empty = []
for (const employee of array_empolyee) {
    let array = employee.emp_name
    empty.push(array)
}
console.log(empty);
// Q2
console.log("%cQ2============list of departments===============================================", "color:yellow");
for (const dept of array_empolyee) {
    console.log(dept.emp_dept);
}
// Q3
console.log("%cQ3============list of employee id===============================================", "color:yellow");
for (const id of array_empolyee) {
    console.log(id.emp_id);
}