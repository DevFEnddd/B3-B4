//(Optional) Write a script asking users to enter a sequence of names, 
//separated by commas (,), Create a new array containing the names, each surrounded with <>. If you need hints, find them at the end of this homework
let arr = prompt("Nhap vao choi cac ten").split(",");
let newArr = [];
//arr=newArr;
for (let i = 0; i < arr.length; i++) {
   alert("<" + arr[i] + ">");
}
