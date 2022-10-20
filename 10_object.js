const teacher = {
    firstName: 'Sudarshan',
    lastName: 'Ghatage',
    designation: 'professor',
    degrees:{
        engineering: 'CSC',
        PHD: 'Adv Computing',
        
    },
    Certificates:{
        certificate_1: 'Hacker Rank Participation',
        certificate_2: 'Certificate in IFE course',
        certificate_3: 'Certificate in Adv Programming'
    },
    concat: function() {
        let details = `after concat Total degrees are: ${this.degrees.engineering}, ${this.degrees.PHD}`;
        return details;
    }
}
console.table(teacher);
console.log("========================================================================================================================================");
console.log(`nested object "degrees" are`);
console.log(teacher.degrees);
console.log("========================================================================================================================================");
console.log(`nested object "Certificates" are`);
console.log(teacher.Certificates);
console.log("========================================================================================================================================");
console.log(teacher.concat());
console.log("========================================================================================================================================");
teacher.degrees.graduation = 'BCA'
console.log("after new 'graduation' propety adding:");
console.table(teacher.degrees);
console.log("========================================================================================================================================");
teacher.degrees.engineering = 'computer science'
console.log("after modifying 'engineering' propety");
console.table(teacher.degrees);
console.log("========================================================================================================================================");
delete teacher.Certificates.certificate_3
console.log("one certificate deleted from nested object");
console.table(teacher.Certificates);
console.log("========================================================================================================================================");
teacher.Certificates.certificateNew = 'added'
console.log("new certificate added in nested object");
console.table(teacher.Certificates);

