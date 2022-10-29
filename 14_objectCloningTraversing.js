// Q1 create object
const bank_sbi = {
    bankName: 'State Bank of india',
    bankBranchCode: 1888,
    bankIFSC: 'SBIN0001888' ,
    email: 'sbi.0188@sbi.co.in'
}
// Q2 create object
const bank_location = {
    street: 'Market Yard',
    city: 'Kolhapur',
    pin_code: 416005
}

// Q3
console.log("Q3.========clone using 'object.assign()'=================================");
const assign = Object.assign({}, bank_sbi , bank_location);
for (const key in assign) {
    if (Object.hasOwnProperty.call(assign, key)) {
        const element = assign[key];
        console.log(`${key}: ${element}`);
    }
}
console.log("========clone using 'spread operator'====================================");
const spread = {...bank_sbi, ...bank_location}
for (const key in spread) {
    if (Object.hasOwnProperty.call(spread, key)) {
        const element = spread[key];
        console.log(`${key}: ${element}`);
    }
}

// Q4
const rate_of_interest = {
    home_loan_interest: '8.15%' ,
    personal_loan_interest: '9.60%',
    due_interest: '3%'
}
// Q5
console.log("Q5.=========merged all step objects into new object=====================================");
const sbi_details = Object.assign({},bank_sbi, bank_location,rate_of_interest)
console.log(sbi_details);
// Q6
console.log("Q6========traverse merged object using loop=============================================");

function traverse(arg) {
    for (const key in arg) {
        if (arg, key) {
            const element = arg[key]
            console.log(`${key}: ${element}`);
        }
    }
}
traverse(sbi_details)