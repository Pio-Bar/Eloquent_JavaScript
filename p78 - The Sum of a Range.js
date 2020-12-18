//Exercise page 78 -- THE SUM OF A RANGE

//My Solution

function range(start, end, step = start < end ? 1 : -1) {
  let arr = [];
  if (step >= 0) {    
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
    return arr;
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
    return arr;
  }
}

function sum(array) {
  let count = 0;
  for (element of array) {
    count += element;
  }
  return count;
}

console.log(`range function: ${range(10, 2, )}`);
console.log(`sum function: ${sum([1, 2, 3, 4, 5])}`);
console.log(`both functions: ${sum(range(1, 10))}`);

// Book's Solution

// function range(start, end, step = start < end ? 1 : -1) {
//     let array = [];
  
//     if (step > 0) {
//       for (let i = start; i <= end; i += step) array.push(i);
//     } else {
//       for (let i = start; i >= end; i += step) array.push(i);
//     }
//     return array;
//   }
  
//   function sum(array) {
//     let total = 0;
//     for (let value of array) {
//       total += value;
//     }
//     return total;
//   }
  
//   console.log(range(1, 10))
//   // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   console.log(range(5, 2, -1));
//   // → [5, 4, 3, 2]
//   console.log(sum(range(1, 10)));
//   // → 55