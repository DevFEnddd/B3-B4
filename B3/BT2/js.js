// Write a script asking users to enter a sequence of numbers, 
// the numbers are separated by commas, find the smallest number and log it out to users
let arr = prompt("Enter the number sequence: ");
let newArr = arr.split(',');
let minValue = newArr[0];

for (let i = 0; i < newArr.length; i++) {
         
      if (minValue > Number(newArr[i])) {
               minValue = Number(newArr[i])
      }
}
alert(minValue)
