//Exercise page 56 -- RECURSION

//My Solution

function isEven(num){
    if (num < 0){num = -num}
    if (num == 1){
        return false;
    } else if (num === 0){
        return true
    } else return isEven(num - 2)
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Book's Solution


// function isEven(n) {
//     if (n == 0)
//       return true;
//     else if (n == 1)
//       return false;
//     else if (n < 0)
//       return isEven(-n);
//     else
//       return isEven(n - 2);
//   }
  
  
//   console.log(isEven(50));
//   // → true
//   console.log(isEven(75));
//   // → false
//   console.log(isEven(-1));
//   // → false