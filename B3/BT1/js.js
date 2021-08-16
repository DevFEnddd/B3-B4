/*Ex1:Write a script to ask users enter a sequence of numbers,
 the Numbers are separated by commas, calculate the sum of the numbers and show it to users
 */
 let arr = prompt("Enter the number sequence: ");
 let newArr = arr.split(',');
 let sum = 0;
 
 for (let i = 0; i < newArr.length; i++) {
          
      sum += Number(newArr[i])
 }
 alert(sum)
