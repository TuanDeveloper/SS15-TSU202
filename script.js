
// element - Phan tu
let students = ["Thu Hien", "Thanh Huong", "Hau", "Vu", "Phong"]; // length = 3
//       index:    0.            1          2.      3.     4

// students.unshift("Nam");
// students.push("Hai");
students.splice(1, 0, "Yen");
students[0] = "Hien";

for (i in students) {
    console.log(students[i]);
}   






