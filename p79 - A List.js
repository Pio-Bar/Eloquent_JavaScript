//Exercise page 79 -- A LIST - (to be revised!)

//My Solution
const arr = [1,2,3]


 function arrayToList(arr){
    let list = {};
    for (var i = arr.length; i>=0; i--){
        list = {value: arr[i],
                rest: list
                }
    }
    return list
 }

function listToArray(list){
    let arr = [];
    
}


 console.log(arrayToList(arr))
//Book's Solution 

// function arrayToList(array) {
//     let list = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//       list = {value: array[i], rest: list};
//     }
//     return list;
//   }
  
//   function listToArray(list) {
//     let array = [];
//     for (let node = list; node; node = node.rest) {
//       array.push(node.value);
//     }
//     return array;
//   }
  
//   function prepend(value, list) {
//     return {value, rest: list};
//   }
  
//   function nth(list, n) {
//     if (!list) return undefined;
//     else if (n == 0) return list.value;
//     else return nth(list.rest, n - 1);
//   }
  
//   console.log(arrayToList([10, 20]));
//   // → {value: 10, rest: {value: 20, rest: null}}
//   console.log(listToArray(arrayToList([10, 20, 30])));
//   // → [10, 20, 30]
//   console.log(prepend(10, prepend(20, null)));
//   // → {value: 10, rest: {value: 20, rest: null}}
//   console.log(nth(arrayToList([10, 20, 30]), 1));
// //   → 20