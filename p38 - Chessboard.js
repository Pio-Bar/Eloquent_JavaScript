//Exercise page 38 -- CHESSBOARD

//My Solution

let size = prompt('Give me a number!')

for (let i = 0; i < size; i++){
    if (i % 2 === 0){
        console.log(' #'.repeat(size/2))
    } else {
        console.log('# '.repeat(size/2))
    }
}


//Book's Solution

// var size = 8;

// var board = "";

// for (var y = 0; y < size; y++) {
//   for (var x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0)
//       board += " ";
//     else
//       board += "#";
//   }
//   board += "\n";
// }

// console.log(board);