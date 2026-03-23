// Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. 
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn 
// hoặc bằng 10.

let numbers = []; // Mảng rỗng

for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Nhap vao 1 so nguyen"));
    numbers.push(num);
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {

        console.log(numbers[i]);
    }
}


