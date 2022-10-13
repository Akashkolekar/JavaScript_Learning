// Q1
console.log("Q1._______Male marriage eligibility______________________________________");
function maleMarriageEligibility(gender, age, boyName) {
    var result = gender == "Male" && age >= 21 ? `Hey ${boyName} you are eligible for marriage` : "Not eligible for marriage";
    
    console.log(`Boy Name: ${boyName}`);
    console.log(`Gender: ${gender}`);
    console.log(`Age: ${age}`);
    return result;
}

console.log(maleMarriageEligibility("Male", 25, "Billgates"));
console.log("________________________________________________________________________");
console.log(maleMarriageEligibility("Male", 17, "Stew Jobs"));
// Q2
console.log("Q2.__________female Marriage Eligibility_________________________________");

function femaleMarriageEligibility(gender, age, girlName) {
    if (age >= 18) {
        var result = `Hey ${girlName} you are eligible for marriage`;
    } else {
        var result = `Hey ${girlName} you are not eligible for marriage`;
    }
    console.log(`Girl Name: ${girlName}`);
    console.log(`Gender: ${gender}`);
    console.log(`Age: ${age}`);
    return result;
}
console.log(femaleMarriageEligibility("Female", 16, "Jenifer"));
console.log("______________________________________________________________________");
console.log(femaleMarriageEligibility("Female", 27, "Malinda Gates"));
