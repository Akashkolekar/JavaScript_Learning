let index = 0
function gradeSystem(score) {
    index++
    console.log(`${index}______`);
    if (score >= 1 && score < 35) {
        console.log(`Your score: ${score}`);
        console.log("You are Failed");
    } else if (score >= 35 && score < 60) {
        console.log(`Your score: ${score}`);
        console.log("Passed and GRADE is 'C'");
    } else if (score >= 60 && score < 75) {
        console.log(`Your score: ${score}`);
        console.log("Passed and GRADE is 'B'");
    } else if (score >= 75 && score < 90) {
        console.log(`Your score: ${score}`);
        console.log("Passed and GRADE is 'A'");
    } else if (score >= 90 && score <= 100) {
        console.log(`Your score: ${score}`);
        console.log("Passed and GRADE is 'A+'");
    } else if (score < 0 || score > 100) {
        console.log(`Your score: ${score}`);
        console.log("Invalid score");
    } else if (score === null) {
        console.log(`Your score: ${score}`);
        console.log(null);
    } else if (score === undefined) {
        console.log(`Your score: ${score}`);
        console.log(undefined);
    } else if(score != NaN) {
        console.log(`Your score: ${score}`);
        console.log("Ivalid Input");
    }
}

gradeSystem(66);
gradeSystem(13);
gradeSystem('" "');
gradeSystem(98);
gradeSystem('"fifty Five"');
gradeSystem(35);
gradeSystem(75);
gradeSystem(null);
gradeSystem(undefined);
gradeSystem(-20);
gradeSystem(55);
gradeSystem(82);
