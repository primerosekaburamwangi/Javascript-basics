let students=["Harrison","Prime","Lilian","John"];
console.log("Students:", students);

students[0]="David"; //Updating the first student
console.log("Updated Students:", students);

console.log("First Student:", students[0]);
console.log("Second Student:", students[1]);
console.log("Third Student:", students[2]);
console.log("Fourth Student:", students[3]);

students.push("Mary"); //Adding a new student to the array
console.log("Updated Students:", students);

students.pop(); //Removing the last student from the array
console.log("Updated Students after pop:", students);

students.shift(); //Removing the first student from the array
console.log("Updated Students after shift:", students);

students.unshift("David"); //Adding a new student to the beginning of the array
console.log("Updated Students after unshift:", students);