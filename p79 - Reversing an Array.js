//Exercise page 79 -- REVERSING AN ARRAY

//My Solution

const sampleArr = ['apple',1, 2, 'E', 4, 5];


function reverseArray(arr) {
  let newArr = [];
  for (i = arr.length -1; i >= 0; i--) {
    newArr.push(arr[i]);
  }return newArr
}

console.log(`Reversed new array: ${reverseArray(sampleArr)}`);


function reverseArrayInPlace(arr) {
    for(element of [...arr]){
        arr.unshift(element)
        arr.pop()
    } return arr
}

console.log(`Reversed in place: ${reverseArrayInPlace(sampleArr)}`);


//Book's Solution

// function reverseArray(array) {
//     let output = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//       output.push(array[i]);
//     }
//     return output;
//   }
  
//   function reverseArrayInPlace(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//       let old = array[i];
//       array[i] = array[array.length - 1 - i];
//       array[array.length - 1 - i] = old;
//     }
//     return array;
//   }
  
//   console.log(reverseArray(["A", "B", "C"]));
//   // → ["C", "B", "A"];
//   let arrayValue = [1, 2, 3, 4, 5];
//   reverseArrayInPlace(arrayValue);
//   console.log(arrayValue);
//   // → [5, 4, 3, 2, 1]