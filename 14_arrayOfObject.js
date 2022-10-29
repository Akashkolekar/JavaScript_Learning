// Q1
class bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate) {
        this.bank_name = bank_name,
            this.location = location,
            this.account_no = account_no,
            this.ifsc = ifsc,
            this.interest_rate = interest_rate
    }

}
// create objects
let axis_bank = new bank("AXIS BANK", "Kolhapur", 12345678910, "UTIB0000134", "3.00%")
let sbi_bank = new bank("SBI BANK", "kagal", 12345678910, "SBIN0001888", "2.50%")
let icici_bank = new bank("ICICI BANK", "Kolhapur", 12345678910, "ICICI0001459", "4.00%")
let kotak_bank = new bank("KOTAK BANK", "Sangli", 12345678910, "KKBK0000692", "3.75%")
let hdfc_bank = new bank("HDFC BANK", "Kolhapur", 12345678910, "HDFC0000164", "3.00%")
let punjab_bank = new bank("PUNJAB BANK", "Unchgaon", 12345678910, "PUNB0233200", "2.75%")

// adding object in array
const array = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, punjab_bank]
// log bank name and location
console.log("========log Bank name and Location========================================================================");
for (const element of array) {
    console.log(`${element.bank_name}: ${element.location}`);
}
// find objecy which name has kotak bank
console.log("========find object which name has 'kotak bank'============================================================");
for (const element of array) {
    if (element.bank_name == 'KOTAK BANK') {
        console.log(element);
    }
}

console.log("========log details using for of loop======================================================================");
for (const element of array) {
    console.log(element);
}
