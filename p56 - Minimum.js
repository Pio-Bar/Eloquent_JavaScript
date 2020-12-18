//Exercise page 56 -- MINIMUM

//My Solutions

// function min(num1, num2){
//     if (num1 > num2){
//         console.log(num2)
//     } else {
//         console.log(num1)
//     }
// }

// min(10,11)
// ------------------------------------------------


let min = (num1, num2) =>{
    if (num1 > num2){
                return num2;
            } else {
                return num1;
            }
}

console.log(min(40,50))

// Book's Solution

// function min(a, b) {
//     if (a < b)
//       return a;
//     else
//       return b;
//   }
  
//   console.log(min(0, 10));
//   // → 0
//   console.log(min(0, -10));
//   // → -10