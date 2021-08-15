//You are a shepherd who owns a flock of sheep
// Each of your sheep of your flock has varied sizes:
// 4.1 Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:
// let arr = [5, 7, 300, 90, 24, 50, 75];
// alert("Hello, my name is Phuong and here is my sheep sizes: " + arr);

// //4.2 At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//    if (max < arr[i]) {
//       max = arr[i];
//    }
// }
// alert("Now my biggesst sheep has size : " + max);
// //4.3 When your biggest sheer, its size will return to the default size, which is 8.
// arr[arr.indexOf(max)] = 8;
// alert("Mang sau khi thay doi max: " + arr);

// //In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
// for (let i = 0; i < arr.length; i++) {
//    arr[i] += 50;
// }
// alert("Kich thuoc sau 1 thang " + arr)
// //Let’s do this for 4 months (or as long as you want)
// for (let i = 0; i < arr.length; i++) {
//    arr[i] += 50;

// }
// alert("Kich thuoc sau 2 thang " + arr)

// for (let i = 0; i < arr.length; i++) {
//    arr[i] += 50;

// }
// alert("Kich thuoc sau 3 thang " + arr)

// for (let i = 0; i < arr.length; i++) {
//    arr[i] += 50;

// }
// alert("Kich thuoc sau 4 thang " + arr)

// //Write a program to calculate the total size of your sheep as well as the money you would have. 
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//    sum += arr[i];
// }
// alert("Can nag cua bay cuu: " + sum)
// alert(sum * 2 + " la so tien sau khi ban ");

