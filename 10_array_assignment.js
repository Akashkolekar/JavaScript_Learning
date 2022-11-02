// 3.a
console.log("%c============given array=============================================","color:white");
const arrayOfNames = ['Kamat','Memon','Nashpati','Taimur','Menon','Kamat','Andy','Taimur']
console.log('Given array:', arrayOfNames);
// 3.b
console.log("%c=========after removing duplicate element===========================","color:white");
let duplicateRemove = [...new Set(arrayOfNames)]
console.log(duplicateRemove);
// 3.c
console.log("%c==========count of duplicate element removed========================","color:white");
let length = arrayOfNames.length - duplicateRemove.length
console.log(length);
// 3.d
console.log("%c==========count after removing duplicate names======================","color:white");
let length1 = duplicateRemove.length
console.log(length1);