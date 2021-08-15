//(Optional) Write a script asking users to enter a sequence of Numbers, separated by commas (,). Create a new array containing only the odd Numbers of the entered sequence.
let arr = prompt("Nhap day so: ").split(",");
let newArr = [];
for (let i = 0; i < arr.length; i++) {
   if (Number(i % 2 == 0)) {
      newArr.push(Number(arr[i]));
   }
}
alert(newArr);