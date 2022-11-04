console.log("%cName: Akash Kolekar", "color:white");
console.log("%c4th november Assignment: 2", "color:white");
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

let array_empolyess = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
// console.table(array_empolyess);

// Q1
console.log("%cQ1.=========find employees working in 'TCS' & log emp - name and company===============================", "color:yellow");
for (const empTcs of array_empolyess) {
    if (empTcs.emp_name && empTcs.emp_company === "TCS") {
        console.log(`Employee Name: ${empTcs.emp_name}, Employee Company: ${empTcs.emp_company}`);
    }
}
// Q2
console.log("%cQ2.=========find 'finance' department employees and log department & employee name=====================", "color:yellow");
for (const finance of array_empolyess) {
    if (finance.emp_dept === 'Finance' && finance.emp_name) {
        console.log(`Department Name: ${finance.emp_dept}, Employee Name: ${finance.emp_name}`);
    }
}
// Q3
console.log("%cQ3.=========find employees whose name starts with 'R'==================================================", "color:yellow");
for (const nameStart of array_empolyess) {
    if (nameStart.emp_name.startsWith("R")) {
        console.log(nameStart);
    }
}
// Q4
console.log("%cQ4.=========find employees whose salary is greater than 70k============================================", "color:yellow");
for (const salary of array_empolyess) {
    if (salary.emp_salary > 70000) {
        console.log(`Employee Name: ${salary.emp_name}, Employee Company: ${salary.emp_company}, Employee Salary: ${salary.emp_salary}`);
    }
}
// Q5
console.log("%cQ5.=========find employees whose salary is greater than or equal 50k and 'IT' department===============", "color:yellow");
for (const salaryEqual of array_empolyess) {
    if (salaryEqual.emp_salary >= 50000 && salaryEqual.emp_dept === "IT") {
        console.log(salaryEqual);
    }
}
// Q6
console.log("%cQ6.=========find emp form company 'Infy' and log=======================================================", "color:yellow");
for (const infosys of array_empolyess) {
    if (infosys.emp_company === 'Infy') {
        console.log(infosys);
    }
}