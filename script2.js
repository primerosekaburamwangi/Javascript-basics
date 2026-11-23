//let list = document.getElementById("studentlist");

// Create a new element
//let newStudent = document.createElement("li");
//newStudent.textContent = "David";

// Append the new element to the list
//list.appendChild(newStudent);

let students = ["Harrison", "Prime", "Lilian", "John"];
let list= document.getElementById("studentlist");

for(let name of students){
    let newStudent = document.createElement("li");
    newStudent.textContent = name;
    list.appendChild(newStudent);
}


