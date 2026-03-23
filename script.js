// Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử 
// khác nhau. Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và 
// vị trí của phần tử đó.

let numbers = [];
for (let i = 0; i < 5; i++) {
    let num = Number(prompt("Nhap vao 1 so nguyen"));
    numbers.push(num);
}
// [1, 3, 5, 6, 7]
let max = numbers[0]; // 1 --  Phần tử đầu tiên là lớn nhất
let indexFind = 0;
for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
        indexFind = i;
    }
}

console.log("Gia tri lon nhat la:", max);
console.log("Vi tri la:", indexFind);

