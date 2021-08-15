//Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so
const arr = [1, 2, 3, 4, 5, 6];
let n = Number(prompt("Moi ban nhap so can tim"));
let check = 0;
for (let i = 0; i < arr.length; i++) {
   if (n == arr[i]) {
      alert(arr[i] + " la So ban muon tim o vi tri " + i);
      check = 1;
      break;
   } else {
      !check;
      alert('Không tìm thấy');
      break;
   }
}

