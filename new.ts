

// Intersection Types...!

type student = {
    name : string,
    class : number,
    rollnumber : number,
}
let student1 : student =  {
    name : "Erum Sikander",
    class : 10,
    rollnumber : 150500,
}
type teacher = {
    name : string,
    salary : number,
    exp : number
}
let teacher1 : teacher = {
    name : "Mrs Subhan",
    salary : 50.000,
    exp : 10
}

type specialPerson = student & teacher // intersection type

let specialPerson1 : specialPerson = {
    name : "Ahmed Hassan", 
    class : 12,
    rollnumber : 2024,
    salary : 20.000,
    exp : 5
}
console.log(specialPerson1);
