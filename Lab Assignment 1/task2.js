
function STUDENT(name, reg, cgpa) {
    this.name = name;
    this.reg = reg;
    this.cgpa = cgpa;
}


function createStudents() {
    let s1 = new STUDENT("umair", 11, 3.01);
    let s2 = new STUDENT("ahmed", 51, 2.8);
    let s3 = new STUDENT("zakir", 27, 3.4);
    let s4 = new STUDENT("Ali", 35, 2.3)

    return [s1, s2, s3, s4];
}

let all = createStudents();


let filter = function filtering(Obj) {
    return Obj.gpa > 3;
}
let filteredStudents = all.filter(filter);
console.log("All Students");
console.log(all);
console.log("Students with GPA>3");
console.log(filteredStudents);