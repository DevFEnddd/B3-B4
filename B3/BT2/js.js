// Write a script asking users to enter a sequence of numbers, 
// the numbers are separated by commas, find the smallest number and log it out to users
let n, sum,min;
n = Number(prompt("Nhập số lượng phần tử bạn muốn nhập: "));
let dayso = new Array(n);
for (let i = 0; i < n; i++) {
    dayso[i] = Number(prompt("Enter number: " + (i + 1)));
     min = dayso[0];
    if (dayso[i] < min) {
        min = dayso[i];
    }
}
alert(min);

