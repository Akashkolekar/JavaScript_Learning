console.log("%cName: Akash Kolekar", "color:white");
console.log("%c5th november Assignment: 8. using filter() and reduce()", "color:white");
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

let array_emps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]

// Q1
console.log("%cQ1============employee from 'Wipro' company===================================================", "color:yellow");
let wipro = array_emps.filter((value)=>{
    if (value.emp_company == 'Wipro') {
        console.log(value);
    }
})
// Q2
console.log("%cQ2============employee from 'IT'OR 'HR' department===================================================", "color:yellow");
let dept = array_emps.filter((value)=>{
    if (value.emp_dept =='HR' || value.emp_dept == 'IT') {
        console.log(value);
    }
})
// Q3
console.log("%cQ3============employee whoes emp id's are greater than 50==================================================", "color:yellow");
let idGreater = array_emps.filter((value)=>{
    if (value.emp_id > 50) {
        console.log(value);
    }
})
// Q4
console.log("%cQ4============employee whoes name start with letter 'A', 'V','M'==================================================", "color:yellow");
let nameStart = array_emps.filter((value)=>{
    if (value.emp_name.startsWith("A") || value.emp_name.startsWith("V") || value.emp_name.startsWith("M")) {
        console.log(value);
    }
})
// Q5
console.log("%cQ5============average salary of employee for the department==================================================", "color:yellow");


const sum = array_emps.reduce((running, element) => {
    return running + element.emp_salary
},0)
let salaryAvg = sum / array_emps.length
console.log(salaryAvg);
console.log("%cQ6============average salary of IT dept employee==================================================", "color:yellow");
const itEmps = array_emps.filter((element)=>{
    if (element.emp_dept === "IT") {
        return element
    }
})
const salarySumItEmps = itEmps.reduce((running,element)=>{
    return running + element.emp_salary
},0)
let salaryAvgIt =salarySumItEmps / itEmps.length
console.log(salaryAvgIt);