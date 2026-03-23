// Mảng 1 chiều
let arr = [1, 2, 3, 4, 5]

let arr2 = [[1, 2, 3], [4, 5, 6, 11, 10], [7, 8, 9]]

// console.log(arr2[2][1]);

for (let i = 0; i < arr2.length; i++) { // Lặp 3 lần qua từng phần tử mảng lớn
    for (let j = 0; j < arr2[i].length; j++) { // Lặp qua từng phần tử ở mảng nhỏ
        console.log(arr2[i][j]);
    }
}
